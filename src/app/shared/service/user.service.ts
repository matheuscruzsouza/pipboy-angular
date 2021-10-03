import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { NgxGundbService } from "@matheuscruzsouza/ngx-gundb";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private database: NgxGundbService, private router: Router) {}

  verify() {
    this.database.user.leave();

    this.database.security
      .certify(["*"], "index", this.database.user.getLogged())
      .subscribe((data) => console.log(data));

    this.database.user
      .create("userteste2", "teste123")
      .subscribe((data) => console.log(data));

    this.database.user
      .get("matheus")
      .put({ name: "Matheus", surname: "Souza", age: 29 });

    this.database.user
      .get("matheus")
      .once()
      .subscribe((data: any) => console.log(data));

    this.database.user.get("matheus").put({ scholarship: "graduated" });

    this.database.user
      .get("matheus")
      .once()
      .subscribe((data: any) => console.log(data));
  }

  login(username: string, password: string) {
    this.database.user.auth(username, password).subscribe((data) => {
      this.saveData(data, username);
      this.router.navigate(["/stat"]);
    });
  }

  private saveData(data, username) {
    const copyData = { ...data.sea };
    copyData.username = username;
    sessionStorage.setItem("auth", JSON.stringify(copyData));
  }

  isLogged() {
    return !!this.database.user.getLogged();
  }
}
