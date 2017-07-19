export class RandomizeItemsService {

    constructor() {}

    randomizeCollection(random: Array<Object>, current: Array<Object>, count: number) {
        while (random.length < count) {
            let rand = Math.floor(Math.random() * current.length);

            if (random.indexOf(current[rand]) === -1) {
                random.push(current[rand])
            }
        }
        return random;
    }
}