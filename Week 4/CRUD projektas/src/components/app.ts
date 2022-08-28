import CarsCollection from '../helpers/cars-collection';
import cars from '../data/cars';
import brands from '../data/brand';
import models from '../data/models';
import Table from './table';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import CarJoined from '../types/car-joined';
import SelectField from './select-field';

const ALL_CATEGORIES_ID = '-1';

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  private carsTable: Table<StringifiedObject<CarJoined>>;

  private selectCategory: string;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    if (foundElement === null) throw new Error(`Couldn't find element with given selector: ${selector}`);
    this.htmlElement = foundElement;

    this.carsCollection = new CarsCollection({ brands, cars, models });
    this.carsTable = new Table({
      title: 'All cars',
      columns: {
        id: 'Id',
        brand: 'Brand',
        model: 'Model',
        price: 'Price',
        year: 'Year',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
      onDelete: this.handleCarDelete,
    });
    this.selectCategory = ALL_CATEGORIES_ID;
  }

  public initialize = (): void => {
    const categorySelect = new SelectField({
      label: 'Brands',
      options: [
        { label: 'All cars', value: ALL_CATEGORIES_ID },
        ...brands.map((brand) => ({
          label: brand.title,
          value: brand.id,
        })),
      ],
      onChange: this.handleBrandChange,
    });
    const container = document.createElement('div');
    container.className = 'container my-5';
    container.append(
      categorySelect.htmlElement,
      this.carsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };

  private handleBrandChange = (brandId: string): void => {
    this.selectCategory = brandId;

    this.update();
  };

  private handleCarDelete = (carId: string): void => {
    this.carsCollection.deleteCarById(carId);

    this.update();
  };

  private update = (): void => {
    const { selectCategory, carsCollection } = this;

    if (selectCategory === null) {
      this.carsTable.updateProps({
        title: 'All cars',
        rowsData: carsCollection.all.map(stringifyProps),
      });
    } else {
      const brand = brands.find((b) => b.id === selectCategory);
      if (brand === undefined) throw new Error('Non-existant brand selected');

      this.carsTable.updateProps({
        title: `${brand.title} brand cars`,
        rowsData: carsCollection.getByBrandId(selectCategory).map(stringifyProps),
      });
    }
  };
}

export default App;
