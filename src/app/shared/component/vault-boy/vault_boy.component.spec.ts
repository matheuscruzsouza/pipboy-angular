import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VaultBoyComponent } from "./vault_boy.component";

describe("VaultBoyComponent", () => {
  let component: VaultBoyComponent;
  let fixture: ComponentFixture<VaultBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VaultBoyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
