export default class ProprsForSorting {
  constructor(data) {
    this.props = [];
    this.sortedProps = [];
    for (const prop in data[0]) {
      this.sortedProps.push({ value: prop, asc: true });
      this.sortedProps.push({ value: prop, asc: false });
      this.props.push(prop);
    }
  }
}
