import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { VideoComponent } from "./shared/component/video-player/video.component";
import { Radio } from "./shared/model/radio";
import { RadioService } from "./shared/service/radio.service";

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

  onBoot = true;

  @ViewChild(VideoComponent, { static: false }) video: VideoComponent;

  constructor(private radioService: RadioService) {
    this.updateStyleUrl();

    if (JSON.parse(sessionStorage.getItem("unload") || "true")) {
      setTimeout((_) => {
        this.onBoot = false;
        sessionStorage.setItem("unload", "false");
      }, 16000);
    } else {
      this.onBoot = false;
    }
  }

  ngAfterViewInit(): void {
    this.playAudio(this.radioService.radio.url);

    this.radioService.radio_change.subscribe((radio: Radio) => {
      if (radio.url == null) {
        this.radio.pause();
        this.video.stopVideo();
      } else if (!radio.youtube) {
        this.playAudio(radio.url);
      } else if (radio.youtube) {
        this.playVideo(radio.url);
      }
    });

    const iframe = document.getElementById("iframe1") as HTMLIFrameElement;

    iframe.contentWindow.document.write(
      "<html><body>" +
        '<audio controls autoplay><source src="http://fallout.fm:8000/falloutfm1.ogg" type="audio/ogg">Your browser does not support the audio element.</audio>' +
        "</body></html>"
    );
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

  updateStyleUrl() {
    document.documentElement.ownerDocument.body.style.setProperty(
      "--cursor-url",
      `url('${document.baseURI}assets/images/cursor.png')`
    );

    document.documentElement.ownerDocument.body.style.setProperty(
      "--boot-url",
      `url('${document.baseURI}assets/images/pipboy1x_green.gif')`
    );
  }
}
