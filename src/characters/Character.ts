const NO_TITLE = 'No Title';

export class Character {
  public id!: number;
  public name!: string;
  public gender!: 'Male' | 'Female';
  public titles!: string[];
  public aliases!: string[];
  public houseId!: number;
  public playedBy!: string;
  public imagePath!: string;

  constructor(data: Character) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.titles = data.titles;
    this.aliases = data.aliases;
    this.houseId = data.houseId;
    this.playedBy = data.playedBy;
    this.imagePath = data.imagePath;
  }

  public get displayTitle(): string {
    return this.titles[0] || this.aliases[0] || NO_TITLE;
  }
}
