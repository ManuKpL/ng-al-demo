const NO_TITLE = 'No Title';

export class Character {
  public id!: number;
  public name!: string;
  public gender!: string;
  public url!: string;
  public titles!: string[];
  public aliases!: string[];

  public displayTitle!: string;

  constructor(data: Character) {
    this.name = data.name || data.aliases[0];
    this.gender = data.gender;
    this.url = data.url;
    this.titles = data.titles;
    const [id] = this.url.match(/\d+$/g) || [];
    this.id = parseInt(id, 10);
    this.displayTitle = data.titles[0] || NO_TITLE;
  }

  public hasName(): boolean {
    return !!this.name;
  }
}
