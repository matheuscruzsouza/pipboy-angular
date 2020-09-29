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
      head: 100,
      left_arm: 100,
      right_arm: 100,
      left_leg: 100,
      right_leg: 100,
      irraidated: 0,
      Addicted: 0,
      strength: 0,
      perception: 0,
      endurance: 0,
      charisma: 0,
      inteligence: 0,
      agility: 0,
      luck: 0,
      experience: 0,
      total_action_points: 50,
      total_health_points: 150,
    }
  ) {
    this.health = {
      members: {
        head: options.head,
        left_arm: options.left_arm,
        right_arm: options.right_arm,
        left_leg: options.left_leg,
        right_leg: options.right_leg,
      },
      irraidated: options.irraidated,
      Addicted: options.Addicted,
    };

    this.special = {
      strength: options.strength,
      perception: options.perception,
      endurance: options.endurance,
      charisma: options.charisma,
      inteligence: options.inteligence,
      agility: options.agility,
      luck: options.luck,
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
