export class Marker {
  src_not_found: string;
  src_found: string;
  x: number;
  y: number;
  width: number;
  height: number;

  found: boolean;

  constructor(
    src_not_found: string,
    src_found: string,
    x: number,
    y: number,
    width: number,
    height: number,
    found: boolean = false
  ) {
    this.src_not_found = src_not_found;
    this.src_found = src_found;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.found = found;
  }

  getSrc(): string {
    return this.found ? this.src_found : this.src_not_found;
  }
}
