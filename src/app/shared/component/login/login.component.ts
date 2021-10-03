import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { DataService } from "../../service/data.service";
import { DatabaseService } from "../../service/database.service";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private databaseService: DatabaseService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.verify();

    this.userService.login("matheus999", "teste1234");
  }

  login() {
    const sub = this.databaseService
      .login(this.form.value.username, this.form.value.password)
      .pipe(tap((_) => this.waitLoadPlayer()))
      .subscribe((_) => sub.unsubscribe());
  }

  waitLoadPlayer() {
    this.dataService.preparePlayer();
    const sub = this.dataService.player_change
      .pipe(tap((_) => this.redirect()))
      .subscribe((_) => sub.unsubscribe());
  }

  redirect() {
    this.router.navigate(["/stat"]);
  }
}
