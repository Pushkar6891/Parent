export class Todo {

    public id: number;
    public description: string;
    public done: boolean;
    public targetDate: Date;

    constructor(
        id: number,
        description: string,
        done: boolean,
        targetDate: Date
    ) {
        this.id = id;
        this.description = description;
        this.done = done;
        this.targetDate = targetDate;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public getDescription() {
        return this.description;
    }

    public setDone(done: boolean) {
        this.done = done;
    }

    public getDone() {
        return this.done;
    }

    public setTargetDate(targetDate: Date) {
        this.targetDate = targetDate;
    }

    public getTargetDate() {
        return this.targetDate;
    }
}