type TableProps<Type> = {
  title: string;
  columns: Type;
  rowsData: Type[];
  onDelete: (id: string) => void;
};

type RowData = {
  id: string,
  [key: string]: string,
};

class Table<Type extends RowData> {
  public htmlElement: HTMLElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  constructor(props: TableProps<Type>) {
    this.props = props;

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private initialize() {
    this.renderHeadView();
    this.renderBodyView();
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.append(this.thead, this.tbody);
  }

  private renderHeadView = (): void => {
    const { title, columns } = this.props;

    const headersArray = Object.values(columns);
    const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private renderBodyView = (): void => {
    const { rowsData, columns } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;

        this.addActionsCell(rowHtmlElement, rowData.id);

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private renderView() {
    this.renderHeadView();
    this.renderBodyView();
  }

  public updateProps = (newProps: Partial<TableProps<Type>>): void => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.renderView();
  };

  private addActionsCell = (rowHtmlElement: HTMLTableRowElement, id: string): void => {
    const { onDelete } = this.props;

    const buttonCell = document.createElement('td');

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => onDelete(id));
    deleteButton.style.width = '80px';

    buttonCell.append(deleteButton);
    rowHtmlElement.append(buttonCell);
  };
}
export default Table;
