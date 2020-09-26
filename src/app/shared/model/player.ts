export class Player {
  head: number;
  left_arm: number;
  right_arm: number;
  left_leg: number;
  right_leg: number;

  irraidated: number;
  Addicted: number;

  experience: number;

  action_points: number;

  constructor() {
    this.head = 100;
    this.left_arm = 100;
    this.right_arm = 100;
    this.left_leg = 100;
    this.right_leg = 100;

    this.irraidated = 0;
    this.Addicted = 0;

    this.experience = 0;
    this.action_points = 50;
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
