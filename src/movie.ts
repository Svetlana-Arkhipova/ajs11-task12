import Buyable from './buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly originalName: string,
        readonly imax: boolean,
        readonly releaseYear: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: string,
        readonly duration: string,
    ) {}
}    
