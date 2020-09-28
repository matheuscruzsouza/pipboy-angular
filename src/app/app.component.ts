import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { RadioService } from "./shared/radio.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements AfterViewInit {
  title = "pipboy";

  radioURL: string;

  radio = new Audio();

  src = "";

  @ViewChild("frame", { static: true }) video: HTMLFrameElement;

  constructor(private radioService: RadioService) {}

  ngAfterViewInit(): void {
    this.playAudio(this.radioService.radio.url);

    this.radioService.radio_change.subscribe((radio) => {
      this.playAudio(radio.url);
    });
  }

  playAudio(src) {
    if (src != null) {
      this.radio.src = src;
      this.radio.load();
      this.radio.play();
    } else {
      this.radio.pause();
    }
  }
}
