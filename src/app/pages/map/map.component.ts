import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
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

  private ctx: CanvasRenderingContext2D;

  private TO_RADIANS = Math.PI / 180;

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
      this.drawElement(marker);
    });
  }

  drawElement(marker: Marker) {
    const img = new Image();
    img.onload = () => {
      this.drawImageActualSize(img, marker);
    };
    img.src = marker.getSrc();
  }

  drawImageActualSize(img, marker: Marker) {
    marker.width
      ? this.ctx.drawImage(img, marker.x, marker.y, marker.width, marker.height)
      : this.ctx.drawImage(
          img,
          marker.x,
          marker.y,
          img.width / 6,
          img.height / 6
        );
  }
}
