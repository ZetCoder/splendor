export class Cards {
    price: Object;
    points: number;
    bonus: string;
    imgUrl: string;

    constructor(price: Object, points: number, bonus: string, imgUrl: string) {
        this.price = price;
        this.points = points;
        this.bonus = bonus;
        this.imgUrl = imgUrl;
    }
}