import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "./shared/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements AfterViewInit {
  title = "pipboy";

  radioURL: string;

  radio = new Audio();

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.playAudio(this.dataService.radio.url);

    this.dataService.radio_change.subscribe((radio) => {
      this.playAudio(radio.url);
    });
  }

  playAudio(src) {
    if (src != null) {
      this.radio.src = src;
      this.radio.load();
      this.radio.play();
    }
  }
}
