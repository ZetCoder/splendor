export class Cards {
    price: string[];
    points: number;
    bonus: string;
    imgUrl: string;

    constructor(price: string[], points: number, bonus: string, imgUrl: string) {
        this.price = price;
        this.points = points;
        this.bonus = bonus;
        this.imgUrl = imgUrl;
    }
}