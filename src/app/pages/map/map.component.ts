import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"],
})
export class MapComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");

    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );

    this.dataService.getPlayerLocations().forEach((marker) => {
      this.drawElement(
        marker.getSrc(),
        marker.x,
        marker.y,
        marker.width,
        marker.height
      );
    });
  }

  drawElement(
    src: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const img = new Image();
    img.onload = () => {
      this.drawImageActualSize(img, x, y, width, height);
    };
    img.src = src;
  }

  drawImageActualSize(
    img,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.ctx.drawImage(img, x, y, width, height);
  }
}
