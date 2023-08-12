export default class ProprsForSorting {
  constructor(data) {
    this.props = [];
    for (const prop in data[0]) {
      this.props.push({ value: prop, asc: true });
      this.props.push({ value: prop, asc: false });
    }
  }
}
