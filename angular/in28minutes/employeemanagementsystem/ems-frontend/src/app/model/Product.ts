/*
export class Product {

    public id: number;
    public name: string;
    public description: string;
    public price: number;

    constructor(
        id: number,
        name: string,
        description: string,
        price: number
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
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

    public setDescription(description: string) {
        this.description = description;
    }

    public getDescription() {
        return this.description;
    }

    public setPrice(price: number) {
        this.price = price;
    }

    public getPrice() {
        return this.price;
    }
}
*/

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable:boolean;
    launchDate: Date;
}
