export class User {

    public name: string;
    public email: string;
    public experience: number;
    public domain: string;

    constructor(
        name: string,
        email: string,
        experience: number,
        domain: string
    ) {
        this.name = name;
        this.email = email;
        this.experience = experience;
        this.domain = domain;
    }

    public getName() {
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getExperience() {
        return this.experience;
    }

    public getDomain() {
        return this.domain;
    }

}