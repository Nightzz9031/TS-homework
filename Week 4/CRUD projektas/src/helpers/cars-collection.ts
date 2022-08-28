import Brand from '../types/brand';
import Car from '../types/car';
import Model from '../types/model';
import CarJoined from '../types/car-joined';

type CarsCollectionProps = {
  cars: Car[],
  brands: Brand[],
  models: Model[],
};

class CarsCollection {
  constructor(
    private props: CarsCollectionProps,
    // private brands: Brand[],
    // private cars: Car[],
    // private carModels: Model[],
  ) { }

  private joinCar = ({
    modelId, ...props
  }: Car): CarJoined => {
    const { brands, models } = this.props;
    const carModel = models.find((model) => model.id === modelId);
    const carBrand = brands.find((brand) => brand.id === carModel?.brandId);
    return ({
      brand: (carBrand && carBrand?.title) ?? '',
      model: (carModel && carModel?.title) ?? '',
      ...props,
    });
  };

  get all(): CarJoined[] {
    return this.props.cars.map(this.joinCar);
  }

  public getByBrandId = (brandId: string): CarJoined[] => {
    const { cars, models } = this.props;

    const brandModelsIds = models
      .filter((model) => model.brandId === brandId)
      .map((model) => model.id);

    const brandCars = cars
      .filter((car) => brandModelsIds.includes(car.modelId))
      .map(this.joinCar);

    return brandCars;
  };

  public deleteCarById = (carId: string): void => {
    this.props.cars = this.props.cars.filter((car) => car.id !== carId);
  };
}

export default CarsCollection;
