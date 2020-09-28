import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { DataService } from "src/app/shared/data.service";
import { Marker } from "src/app/shared/model/marker";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"],
})
export class MapComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  @ViewChild("destino", { static: true })
  canvas_destino: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private ctx_destino: CanvasRenderingContext2D;

  constructor(private dataService: DataService) {}

  ITEMS = {};

  isDown = true;
  offset: any[];

  onScroll(event) {
    this.clearCanvas(this.ctx_destino);

    this.calculeMidPoint(
      this.dataService.getPlayerPosition(),
      this.dataService.getPlayerDestiny()
    );
  }

  ngOnInit(): void {
    this.canvas.nativeElement.style.background = `url("/assets/images/map/background_green.png") no-repeat center`;

    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.ctx_destino = this.canvas_destino.nativeElement.getContext("2d");

    this.clearCanvas();

    this.drawPlayerLocations();

    this.drawPlayerPosition();

    this.drawPlayerDestiny();

    this.calculeMidPoint(
      this.dataService.getPlayerPosition(),
      this.dataService.getPlayerDestiny()
    );
  }

  clearCanvas(ctx: CanvasRenderingContext2D = this.ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  drawPlayerLocations() {
    this.dataService.getPlayerLocations().forEach((marker) => {
      this.drawElement(marker);
    });
  }

  drawPlayerPosition() {
    this.drawElement(this.dataService.getPlayerPosition());
  }

  drawPlayerDestiny() {
    this.drawElement(this.dataService.getPlayerDestiny());
  }

  drawElement(marker: Marker, ctx: CanvasRenderingContext2D = this.ctx) {
    const img = new Image();
    img.onload = () => {
      return this.drawImageActualSize(img, marker, ctx);
    };
    img.src = marker.getSrc();
  }

  drawImageActualSize(img, marker: Marker, ctx: CanvasRenderingContext2D) {
    const item = marker.width
      ? ctx.drawImage(
          img,
          marker.x - marker.width / 2,
          marker.y - marker.height / 2,
          marker.width,
          marker.height
        )
      : ctx.drawImage(
          img,
          marker.x - img.width / 6 / 2,
          marker.y - img.height / 6 / 2,
          img.width / 6,
          img.height / 6
        );

    this.ITEMS[marker.name] = item;
  }

  calculeMidPoint(a: Marker, b: Marker) {
    const position = this.calculeFakeMarker();

    const destino = this.dataService.getPlayerDestiny();

    if (position.x + 25 < destino.x && position.y < destino.y) {
      const fake_marker = new Marker("destiny", position.x, position.y, {
        width: 12,
        height: 30,
      });

      this.drawElement(fake_marker, this.ctx_destino);
    }
  }

  calculeFakeMarker() {
    const element = this.canvas_destino.nativeElement;
    const parent = element.parentElement;
    const left = parent.scrollLeft + parent.clientWidth;
    const top = parent.scrollTop;

    const player = this.dataService.getPlayerPosition();
    const destino = this.dataService.getPlayerDestiny();

    const cateto_adjacente = left;
    const angulo_a = Math.atan2(destino.x - player.x, destino.y - player.y);
    const angulo_b = 90 * (Math.PI / 180) - angulo_a;
    const cateto_oposto = cateto_adjacente * Math.tan(angulo_b);

    const position = {
      x: left > cateto_adjacente ? left : cateto_adjacente - 20,
      y: top + 20 > cateto_oposto ? top + 20 : cateto_oposto,
    };

    return position;
  }

  onMouseUp(event) {
    this.isDown = false;
  }

  onMouseDown(event) {
    this.isDown = true;
    this.offset = [
      this.canvas.nativeElement.offsetLeft - event.clientX,
      this.canvas.nativeElement.offsetTop - event.clientY,
    ];
  }

  onMouseMove(event) {
    if (this.isDown && this.offset) {
      const canvasElement = this.canvas.nativeElement;
      const destinoElement = this.canvas_destino.nativeElement;
      const parentElement = this.canvas.nativeElement.parentElement;

      const mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };

      const position = {
        x: mousePosition.x + this.offset[0],
        y: mousePosition.y + this.offset[1],
      };

      parentElement.scrollLeft += position.x / 10;
      parentElement.scrollTop += position.y / 10;
    }
  }
}
