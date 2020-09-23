import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-footer-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.sass"],
})
export class StatusComponent implements OnInit, AfterViewInit {
  @ViewChild("complete") complete: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.complete);

    this.complete.nativeElement.style.width = "99%";
  }
}
