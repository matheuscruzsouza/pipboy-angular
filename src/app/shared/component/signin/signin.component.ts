import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { DataService } from "../../service/data.service";
import { DatabaseService } from "../../service/database.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.sass"],
})
export class SigninComponent implements OnInit {
  form = this.formBuilder.group({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private databaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.databaseService.logout();

    this.databaseService.userStatus();
  }

  signup() {
    const sub = this.databaseService
      .signup(this.form.value.username, this.form.value.password)
      .pipe(tap((_) => this.login()))
      .subscribe((_) => sub.unsubscribe());
  }

  login() {
    const sub = this.databaseService
      .login(this.form.value.username, this.form.value.password)
      .pipe(tap((_) => this.waitLoadPlayer()))
      .subscribe((_) => sub.unsubscribe());
  }

  waitLoadPlayer() {
    console.log("START");

    this.dataService.preparePlayer();
    const sub = this.dataService.player_change
      .pipe(tap((_) => this.redirect()))
      .subscribe((_) => sub.unsubscribe());
  }

  redirect() {
    console.log("END");

    this.router.navigate(["/stat"]);
  }
}
