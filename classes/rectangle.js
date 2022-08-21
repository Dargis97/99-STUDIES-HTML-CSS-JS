class Rectangle {
  constructor({ _width, _height, _color }) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  get area() {
    return this.calcArea();
  }
  set Width(_width) {
    this.width = _width;
  }
  set Height(_height) {
    this.height = _height;
  }
  calcArea() {
    return this.width * this.height;
  }
  static isValidDimensions(width, height) {
    return width === height;
  }
}

const rectangle1 = new Rectangle({ _width: 10, _color: 'red', _height: 15 });
const rectangle2 = new Rectangle({ _width: 15, _height: 30 });

rectangle1.Width = 20;

console.log(rectangle1.area);
console.log(Rectangle.isValidDimensions(20, 20));
