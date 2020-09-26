export class Marker {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;

  found: boolean;
  hud: boolean;

  constructor(
    name: string,
    x: number,
    y: number,
    options?: {
      width?: number;
      height?: number;
      found?: boolean;
      hud?: boolean;
    }
  ) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = options?.width;
    this.height = options?.height;

    this.found = options?.found || false;
    this.hud = options?.hud || false;
  }

  getSrc(): string {
    const image_sprite = this.found ? "found" : "not_found";
    const image_path = `assets/images/map/markers/${image_sprite}/${this.name}.svg`;
    const image_hud = `assets/images/map/markers/${this.name}.svg`;

    return this.hud ? image_hud : image_path;
  }
}
