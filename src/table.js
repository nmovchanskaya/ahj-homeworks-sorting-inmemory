import PropsForSorting from './props';

export default class Table {
  constructor(element, data) {
    this.tableElem = element;
    this.data = data;
    const propsForSorting = new PropsForSorting(data);
    this.props = propsForSorting.props;
    this.sortedIdx = 0;

    this.render();
  }

  sort(field, asc) {
    // sort for string field
    // console.log(Number.isNaN(this.data[0][field]));
    if (typeof this.data[0][field] === 'string') {
      if (asc) {
        this.data.sort((a, b) => {
          if (a[field] > b[field]) {
            return 1;
          }
          return -1;
        });
      } else {
        this.data.sort((a, b) => {
          if (a[field] < b[field]) {
            return 1;
          }
          return -1;
        });
      }
    } else {
      // sort for number field
      if (asc) {
        this.data.sort((a, b) => a[field] - b[field]);
      } else {
        this.data.sort((a, b) => b[field] - a[field]);
      }
    }

    this.render();
  }

  newSort() {
    this.tableElem.innerHTML = '<tr><th>id</th><th>title</th><th>imdb</th><th>year</th></tr>';

    this.sort(this.props[this.sortedIdx].value, this.props[this.sortedIdx].asc);
    if (this.sortedIdx < this.props.length - 1) {
      this.sortedIdx++;
    } else {
      this.sortedIdx = 0;
    }
  }

  render() {
    for (let i = 0; i < this.data.length; i++) {
      const tr = document.createElement('tr');
      tr.className = 'tr-regular';
      let tds = '';

      for (const prop in this.data[i]) {
        if (prop === 'imdb') {
          tds += `<td>imdb: ${this.data[i][prop].toFixed(2)}</td>`;
        } else if (prop === 'year') {
          tds += `<td>(${this.data[i][prop]})</td>`;
        } else {
          tds += `<td>${this.data[i][prop]}</td>`;
        }
      }
      tr.innerHTML = tds;
      this.tableElem.insertBefore(tr, null);
    }
  }
}
