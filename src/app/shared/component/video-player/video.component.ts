import { Component, Input, OnInit } from "@angular/core";

@Component({
  template: '<div id="player"></div>',
  selector: "app-video",
})
export class VideoComponent implements OnInit {
  @Input() video_id = "";

  player;
  done = false;

  ngOnInit() {
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window["onYouTubeIframeAPIReady"] = () => this.onYouTubeIframeAPIReady();
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onYouTubeIframeAPIReady() {
    this.player = new window["YT"].Player("player", {
      height: "100",
      width: "100",
      videoId: this.video_id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
  }

  onPlayerStateChange(event) {
    if (event.data == window["YT"].PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }

  stopVideo() {
    this.player.stopVideo();
  }

  changeVideo(src: string) {
    this.player.loadVideoById(src, 0, "large");
  }
}
