import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  NavigationStart,
} from "@angular/router";
import { DataService } from "src/app/shared/data.service";

@Component({
  selector: "app-stat",
  templateUrl: "./stat.component.html",
  styleUrls: ["./stat.component.sass"],
})
export class StatComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.router.navigateByUrl("/stat/(stat:status)");
  }
}
