import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.sass"],
})
export class MapComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");

    this.drawElement(
      "assets/images/HUD/MAP/vault_not_found_green.png",
      395.1,
      121.5
    );
  }

  drawElement(src: string, x: number, y: number) {
    const img = new Image();
    img.onload = () => {
      this.drawImageActualSize(img, x, y);
    };
    img.src = src;
  }

  drawImageActualSize(img, x: number, y: number) {
    this.ctx.drawImage(img, x, y, 32.5, 32.5);
  }
}
