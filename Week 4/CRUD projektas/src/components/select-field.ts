type SelectOption = {
  label: string,
  value: string,
};

type SelectFieldProps = {
  label: string,
  options: SelectOption[],
  onChange: (newValue: string) => void,
};

class SelectField {
  private static count: number = 0;

  private readonly id: string;

  private props: SelectFieldProps;

  public htmlSelectElement: HTMLSelectElement;

  public htmlLabelElement: HTMLLabelElement;

  public htmlElement: HTMLDivElement;

  constructor(props: SelectFieldProps) {
    SelectField.count += 1;
    this.id = `SelectField-${SelectField.count}`;
    this.props = props;
    this.htmlElement = document.createElement('div');
    this.htmlSelectElement = document.createElement('select');
    this.htmlLabelElement = document.createElement('label');

    this.initialize();
    this.renderView();
  }

  private initialize = (): void => {
    const elementId = `select-${SelectField.count}`;

    this.htmlLabelElement.setAttribute('for', elementId);

    this.htmlSelectElement.className = 'form-select';
    this.htmlSelectElement.id = elementId;

    this.htmlSelectElement.className = 'form-group';
    this.htmlSelectElement.style.width = '100%';
    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlSelectElement,
    );
  };

  private renderView = (): void => {
    const { label, onChange } = this.props;

    this.htmlLabelElement.innerHTML = label;
    this.htmlSelectElement.addEventListener('change', () => onChange(this.htmlSelectElement.value));
    this.renderSelectOptions();
  };

  private renderSelectOptions = (): void => {
    const { options } = this.props;

    const optionsHtmlElements = options.map((option) => {
      const element = document.createElement('option');
      element.innerHTML = option.label;
      element.value = option.value;

      return element;
    });

    this.htmlSelectElement.innerHTML = '';
    this.htmlSelectElement.append(...optionsHtmlElements);
  };
}

export default SelectField;
