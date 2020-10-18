import { Weapon } from "./weapon";
import { Apparel } from "./apparel";
import { Aid } from "./aid";
import { Misc } from "./misc";
import { Junk } from "./junk";
import { Ammunition } from "./ammunition";

export class Player {
  experience: number;

  total_action_points: number;
  total_health_points: number;
  action_points: number;

  health: {
    members: {
      head: number;
      left_arm: number;
      right_arm: number;
      left_leg: number;
      right_leg: number;
    };

    irraidated: number;
    Addicted: number;
  };

  armor: {
    head: any;
    left_arm: any;
    right_arm: any;
    left_leg: any;
    right_leg: any;
  };

  special: {
    strength: number;
    perception: number;
    endurance: number;
    charisma: number;
    inteligence: number;
    agility: number;
    luck: number;
  };

  inventory: {
    weapon: Weapon[];
    apparel: Apparel[];
    aid: Aid[];
    misc: Misc[];
    junk: Junk[];
    ammunition: Ammunition[];
  };

  equiped: {
    hand: Weapon;
    head: Apparel;
    leftArm: Apparel;
    rightArm: Apparel;
    leftLeg: Apparel;
    rightLeg: Apparel;
  };

  constructor(
    options = {
      health: {
        head: 100,
        leftarm: 100,
        leftleg: 100,
        rightarm: 100,
        rightleg: 100,
        addicted: 0,
        irradiated: 0,
      },
      atribute: {
        strength: 0,
        perception: 0,
        endurance: 0,
        charisma: 0,
        inteligence: 0,
        agility: 0,
        luck: 0,
      },
      experience: 0,
      total_action_points: 50,
      total_health_points: 150,
    }
  ) {
    this.health = {
      members: {
        head: options.health.head,
        left_arm: options.health.leftarm,
        right_arm: options.health.rightarm,
        left_leg: options.health.leftleg,
        right_leg: options.health.rightleg,
      },
      irraidated: options.health.irradiated,
      Addicted: options.health.addicted,
    };

    this.special = {
      strength: options.atribute.strength,
      perception: options.atribute.perception,
      endurance: options.atribute.endurance,
      charisma: options.atribute.charisma,
      inteligence: options.atribute.inteligence,
      agility: options.atribute.agility,
      luck: options.atribute.luck,
    };

    this.inventory = {
      weapon: [],
      apparel: [],
      aid: [],
      misc: [],
      junk: [],
      ammunition: [],
    };

    this.equiped = {
      hand: null,
      head: null,
      leftArm: null,
      rightArm: null,
      leftLeg: null,
      rightLeg: null,
    };

    this.experience = options.experience;
    this.total_action_points = options.total_action_points;
    this.action_points = options.total_action_points;
    this.total_health_points = options.total_health_points;
  }

  getStatus(): string {
    const members = Object.values(this.health.members);

    return members.reduce((curr, member) => curr + member, 0) ==
      members.length * 100
      ? "normal"
      : "hurt";
  }

  getLife(): number {
    const members = Object.values(this.health.members);

    const percent = members.reduce((c, m) => c + m, 0) / members.length / 100;

    const life = this.total_health_points * percent;

    return Math.floor(life);
  }

  loseLife(member, value) {
    this.health.members[member] -= value;
    if (this.health.members[member] < 0) this.health.members[member] = 0;
  }
}
