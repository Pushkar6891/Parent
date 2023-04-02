export class Student {
  private id: number = 0;
  private name: string = '';
  private marks: number = 0;

  constructor(id: number, name: string, marks: number) {
    this.id = id;
    this.name = name;
    this.marks = marks;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  public setMarks(marks: number) {
    this.marks = marks;
  }

  public getMarks() {
    return this.marks;
  }
}
