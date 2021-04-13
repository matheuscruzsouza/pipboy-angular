import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { timeout } from "rxjs/operators";
import { VideoComponent } from "./shared/component/video-player/video.component";
import { Radio } from "./shared/model/radio";
import { RadioService } from "./shared/radio.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent implements AfterViewInit {
  title = "pipboy";

  radioURL: string;
  videoID: string;

  radio = new Audio();

  src = "";

  @ViewChild(VideoComponent, { static: false }) video: VideoComponent;

  constructor(private radioService: RadioService) {}

  ngAfterViewInit(): void {
    this.playAudio(this.radioService.radio.url);

    this.radioService.radio_change.subscribe((radio: Radio) => {
      console.log(this.video);

      if (!radio.youtube) {
        this.playAudio(radio.url);
      } else {
        this.playVideo(radio.url);
      }
    });
  }

  playAudio(src) {
    if (src != null) {
      if (this.video && this.videoID != null) {
        this.video.stopVideo();
      }
      this.videoID = null;
      this.radio.src = src;
      this.radio.load();
      this.radio.play();
    } else {
      this.radio.pause();
    }
  }

  playVideo(src) {
    if (src != null) {
      if (this.video && this.videoID != null) {
        this.video.changeVideo(src);
      } else {
        this.videoID = src;
      }
      this.radio.src = null;
      this.radio.pause();
    } else {
      this.video.stopVideo();
    }
  }
}
