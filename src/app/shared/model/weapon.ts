export enum TypeWeapon {
  pistol,
  shotgun,
  smg,
  rifle,
  heavy,
  semiautomatic,
  automatic,
  pipe,
  special,
  melee,
}

export class Ammunition {
  constructor() {}
}

export class Weapon {
  name: string;
  type: TypeWeapon;
  ammunition: Ammunition;
  damage: number;
  fireRange: number;
  range: number;
  accuracy: number;
  weight: number;
  value: number;

  effect: string;

  constructor() {}
}
