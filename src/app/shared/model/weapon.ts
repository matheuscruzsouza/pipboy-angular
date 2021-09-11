import {
  Ammo10Milimeter,
  Bullet,
  Ammunition,
  AmmoShotgunShell,
} from "./ammunition";
import { v4 as uuidv4 } from "uuid";

export enum TypeWeapon {
  pistol = "Pistol",
  shotgun = "Shotgun",
  smg = "SMG",
  rifle = "Rifle",
  heavy = "Heavy",
  semiautomatic = "Semi-automatic",
  automatic = "Automatic",
  pipe = "Pipe",
  special = "Special",
  melee = "Melee",
}

export abstract class Weapon {
  readonly baseClass = "weapon";

  oid: string;
  name: string;
  type: TypeWeapon;
  ammunition: Bullet;
  damage: number;
  fireRate: number;
  range: number;
  accuracy: number;
  weight: number;
  value: number;

  apCost: number;

  effect: string;
  imageSRC: string;

  constructor() {
    this.oid = uuidv4();
  }

  fire() {
    if (this.ammunition.quantity - 1 > 0) {
      this.ammunition.quantity -= 1;
      return Math.random() * this.damage;
    }
    return null;
  }
}

export class Pistol extends Weapon {
  readonly type = TypeWeapon.pistol;

  imageSRC = "assets/images/HUD/Inventory/icon_82.svg";

  constructor(options?: {
    name?: string;
    ammunition?: Ammunition;
    damage?: number;
    fireRate?: number;
    apCost?: number;
    range?: number;
    weight?: number;
    value?: number;
    accuracy?: number;
  }) {
    super();

    this.name = options?.name || "10mm Pistol";
    this.ammunition = options?.ammunition || new Ammo10Milimeter();
    this.damage = options?.damage || 18;
    this.fireRate = options?.fireRate || 4.66;
    this.apCost = options?.apCost || 28;
    this.range = options?.range || 21.93;
    this.weight = options?.weight || 3;
    this.value = options?.value || 45;
    this.accuracy = Number.parseFloat(
      (options?.accuracy || Math.random() * 100).toFixed(2)
    );
  }
}

export class Shotgun extends Weapon {
  readonly type = TypeWeapon.shotgun;

  imageSRC = "assets/images/HUD/Inventory/icon_90.svg";

  constructor(options?: {
    name?: string;
    ammunition?: AmmoShotgunShell;
    damage?: number;
    fireRate?: number;
    apCost?: number;
    range?: number;
    weight?: number;
    value?: number;
    accuracy?: number;
  }) {
    super();

    this.name = options?.name || "Combat Shotgun";
    this.ammunition = options?.ammunition || new AmmoShotgunShell();
    this.damage = options?.damage || 50;
    this.fireRate = options?.fireRate || 120;
    this.apCost = options?.apCost || 30;
    this.range = options?.range || 25.59;
    this.weight = options?.weight || 7;
    this.value = options?.value || 65;
    this.accuracy = Number.parseFloat(
      (options?.accuracy || Math.random() * 30).toFixed(2)
    );
  }
}

export class SMG extends Weapon {
  readonly type = TypeWeapon.smg;
}

export class Rifle extends Weapon {
  readonly type = TypeWeapon.rifle;
}

export class Heavy extends Weapon {
  readonly type = TypeWeapon.heavy;
}

export class Semiautomatic extends Weapon {
  readonly type = TypeWeapon.semiautomatic;
}

export class Automatic extends Weapon {
  readonly type = TypeWeapon.automatic;
}

export class Pipe extends Weapon {
  readonly type = TypeWeapon.pipe;
}

export class Special extends Weapon {
  readonly type = TypeWeapon.special;
}

export class Melee {
  readonly type = TypeWeapon.melee;
  readonly baseClass = "weapon";

  imageSRC = "assets/images/HUD/Inventory/icon_102.svg";

  name: string;
  damage: number;
  fireRate: string;
  weight: number;
  value: number;

  apCost: number;

  effect: string;

  constructor(options?: {
    name?: string;
    ammunition?: AmmoShotgunShell;
    damage?: number;
    fireRate?: string;
    apCost?: number;
    weight?: number;
    value?: number;
  }) {
    this.name = options?.name || "Security Baton";
    this.damage = options?.damage || 11;
    this.fireRate = options?.fireRate || "medium";
    this.apCost = options?.apCost || 30;
    this.weight = options?.weight || 2;
    this.value = options?.value || 15;
  }
}
