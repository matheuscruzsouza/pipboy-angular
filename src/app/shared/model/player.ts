export class Player {
  head: number;
  left_arm: number;
  right_arm: number;
  left_leg: number;
  right_leg: number;

  irraidated: number;
  Addicted: number;

  strength: number;
  perception: number;
  endurance: number;
  charisma: number;
  inteligence: number;
  agility: number;
  luck: number;

  experience: number;
  total_action_points: number;

  action_points: number;

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
    }
  ) {
    this.head = options.head;
    this.left_arm = options.left_arm;
    this.right_arm = options.right_arm;
    this.left_leg = options.left_leg;
    this.right_leg = options.right_leg;

    this.irraidated = options.irraidated;
    this.Addicted = options.Addicted;

    this.strength = options.strength;
    this.perception = options.perception;
    this.endurance = options.endurance;
    this.charisma = options.charisma;
    this.inteligence = options.inteligence;
    this.agility = options.agility;
    this.luck = options.luck;

    this.experience = options.experience;
    this.total_action_points = options.total_action_points;
    this.action_points = options.total_action_points;
  }

  getStatus(): string {
    const members = [
      this.head,
      this.left_arm,
      this.left_leg,
      this.right_arm,
      this.right_leg,
    ];

    return members.reduce((curr, member) => curr + member, 0) == 500
      ? "normal"
      : "hurt";
  }

  getLife(): number {
    const members = [
      this.head,
      this.left_arm,
      this.left_leg,
      this.right_arm,
      this.right_leg,
    ];

    return (
      members.reduce((curr, member) => Number(curr) + Number(member), 0) / 5
    );
  }

  loseLife(member, value) {
    switch (member) {
      case "left_arm":
        this.left_arm -= value;
        if (this.left_arm < 0) this.left_arm = 0;
        break;
      case "head":
        this.head -= value;
        if (this.head < 0) this.head = 0;
        break;
      case "right_arm":
        this.right_arm -= value;
        if (this.right_arm < 0) this.right_arm = 0;
        break;
      case "left_leg":
        this.left_leg -= value;
        if (this.left_leg < 0) this.left_leg = 0;
        break;
      case "right_leg":
        this.right_leg -= value;
        if (this.right_leg < 0) this.right_leg = 0;
        break;
    }
  }
}
