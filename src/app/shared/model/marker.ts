export class Marker {
  name: string;
  icon: string;
  x: number;
  y: number;
  width: number;
  height: number;

  found: boolean;
  hud: boolean;
  travel: boolean;

  constructor(
    name: string,
    icon: string,
    x: number,
    y: number,
    options?: {
      width?: number;
      height?: number;
      found?: boolean;
      hud?: boolean;
      travel?: boolean;
    }
  ) {
    this.name = name;
    this.icon = icon;
    this.x = x;
    this.y = y;
    this.width = options?.width;
    this.height = options?.height;

    this.found = options?.found || false;
    this.hud = options?.hud || false;
    this.travel = options?.travel || false;

    if (!this.width && !this.height) {
      const img = new Image();
      img.onload = () => {
        this.width = img.width / 6;
        this.height = img.height / 6;
      };
      img.src = this.getSrc();
    }
  }

  getSrc(): string {
    const image_sprite = this.found ? 'found' : 'not_found';
    const image_path = `assets/images/map/markers/${image_sprite}/${this.icon}.svg`;
    const image_hud = `assets/images/map/markers/${this.icon}.svg`;

    return this.hud ? image_hud : image_path;
  }

  getName() {
    console.log(this.name, this.found);
    
    return this.found ? this.name : 'unknown';
  }

  isPointInside = function (x, y) {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    );
  };
}
