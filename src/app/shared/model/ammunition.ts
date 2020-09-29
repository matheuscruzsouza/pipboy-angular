import { TypeWeapon } from "./weapon";

export enum TypeAmmo {
  Ammo9Milimeter = "9mm Round",
  Ammo10Milimeter = "10mm Round",
  Ammo44Caliber = ".44mm Round",
  Ammo38Caliber = ".38 Round",
  Ammo45Caliber = ".45mm Round",
  Ammo308Caliber = ".308 Round",
  AmmoShotgunShell = "Shotgun Shell",
  Ammo556Caliber = "5.56mm Round",
  Ammo762Caliber = "7.62mm Round",
  Ammo5Milimeters = "5mm Round",
  AmmoMissile = "Missile",
  AmmoMiniNuke = "Mini Nuke",
  AmmoFusionCell = "Fusion Cell",
  AmmoPlasmaCartidge = "Plasma Cartridge",
  AmmoFlamerFuel = "Flamer Fuel",
  AmmoCryoRound = "Cryo Round",
  AmmoGammaRound = "Gamma Round",
  FusionCore = "Fusion Core",
}

export abstract class Ammunition {
  readonly baseClass = "ammunition";

  type: TypeAmmo;
  weight: number;

  constructor() {}
}

export abstract class Bullet extends Ammunition {
  constructor(public quantity?: number) {
    super();
    if (!quantity) this.quantity = Math.floor(Math.random() * 10);
  }
}

export class Ammo9Milimeter extends Bullet {
  readonly type = TypeAmmo.Ammo9Milimeter;
}

export class Ammo10Milimeter extends Bullet {
  readonly type = TypeAmmo.Ammo10Milimeter;
}

export class Ammo44Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo44Caliber;
}

export class Ammo38Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo38Caliber;
}

export class Ammo45Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo45Caliber;
}

export class Ammo308Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo308Caliber;
}

export class AmmoShotgunShell extends Bullet {
  readonly type = TypeAmmo.AmmoShotgunShell;
}

export class Ammo556Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo556Caliber;
}

export class Ammo762Caliber extends Bullet {
  readonly type = TypeAmmo.Ammo762Caliber;
}

export class Ammo5Milimeters extends Bullet {
  readonly type = TypeAmmo.Ammo5Milimeters;
}

export class AmmoMissile extends Bullet {
  readonly type = TypeAmmo.AmmoMissile;
}

export class AmmoMiniNuke extends Bullet {
  readonly type = TypeAmmo.AmmoMiniNuke;
}

export class AmmoFusionCell extends Bullet {
  readonly type = TypeAmmo.AmmoFusionCell;
}

export class AmmoPlasmaCartidge extends Bullet {
  readonly type = TypeAmmo.AmmoPlasmaCartidge;
}

export class AmmoFlamerFuel extends Bullet {
  readonly type = TypeAmmo.AmmoFlamerFuel;
}

export class AmmoCryoRound extends Bullet {
  readonly type = TypeAmmo.AmmoCryoRound;
}

export class AmmoGammaRound extends Bullet {
  readonly type = TypeAmmo.AmmoGammaRound;
}

export class FusionCore extends Ammunition {
  readonly type = TypeAmmo.FusionCore;
}
