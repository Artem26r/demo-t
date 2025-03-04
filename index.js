class List {
  constructor() {
    this.items = [];
  }

  append(value) {
    this.items.push(value);
  }

  find(value) {
    return this.items.indexOf(value);
  }

  insertAt(index, value) {
    if (index < 0 || index > this.items.length) return;
    this.items.splice(index, 0, value);
  }

  remove(value) {
    const index = this.find(value);
    if (index !== -1) this.items.splice(index, 1);
  }

  update(index, value) {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = value;
    }
  }

  size() {
    return this.items.length;
  }

  toArray() {
    return [...this.items];
  }
}
