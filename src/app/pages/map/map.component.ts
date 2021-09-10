import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";
import { DataService } from "src/app/shared/service/data.service";
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
    this.canvas.nativeElement.style.background = `url("assets/images/map/background_green.png") no-repeat center`;

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
    marker.width
      ? ctx.drawImage(img, marker.x, marker.y, marker.width, marker.height)
      : ctx.drawImage(img, marker.x, marker.y, img.width / 6, img.height / 6);

    this.ITEMS[marker.name] = marker;
  }

  calculeMidPoint(a: Marker, b: Marker) {
    const position = this.calculeFakeMarker();

    const destino = this.dataService.getPlayerDestiny();

    const fake_marker = new Marker(
      "destiny",
      "destiny",
      position.x,
      position.y,
      {
        width: 12,
        height: 30,
      }
    );

    this.drawElement(fake_marker, this.ctx_destino);
  }

  calculeFakeMarker() {
    const element = this.canvas_destino.nativeElement;
    const parent = element.parentElement;

    const r = parent.scrollLeft;
    const l = parent.scrollLeft + parent.clientWidth;
    const t = parent.scrollTop;
    const b = parent.scrollTop + parent.clientHeight;

    const player = this.dataService.getPlayerPosition();
    const destino = this.dataService.getPlayerDestiny();

    // const cateto_adjacente = left;
    // const angulo_a = Math.atan2(destino.x - player.x, destino.y - player.y);
    // const angulo_b = 90 * (Math.PI / 180) - angulo_a;
    // const cateto_oposto = cateto_adjacente * Math.tan(angulo_b);

    const position = {
      x: l < destino.x ? l - 20 : destino.x < r ? r + 20 : destino.x,
      y: destino.y < t ? t + 20 : b < destino.y ? b - 20 : destino.y - 0.1,
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

    const canvasElement = document
      .getElementById("canvas")
      .getBoundingClientRect();
    var offsetX = canvasElement.left;
    var offsetY = canvasElement.top;

    const mouseX = event.clientX - offsetX;
    const mouseY = event.clientY - offsetY;

    const items: Marker[] = Object.values(this.ITEMS);

    for (var i = 0; i < items.length; i++) {
      if (items[i].isPointInside(mouseX, mouseY)) {
        if (items[i].travel) {
          if (
            confirm(
              "Do you realy wanna travel to " +
                items[i].getName() +
                " location? "
            )
          ) {
            items[i].found = true;
            this.clearCanvas();

            items.forEach((element) => {
              this.drawElement(element);
            });
          }
        }
      }
    }
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
