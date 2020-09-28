import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-inv",
  templateUrl: "./inv.component.html",
  styleUrls: ["./inv.component.sass"],
})
export class InvComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl("/inv/(inv:weapons)");
  }
}
