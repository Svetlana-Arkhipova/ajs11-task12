import Buyable from './buyable'; 

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void { this.items.push(item); }

    getAll(): Buyable[] { return [...this.items]; }

    cost(): number {
        let cost: number = 0;
        for (let item of this.items) { 
            cost += item.price;
        }
        return cost;
    }

    discountCost(discount: number): number {
        let discountCost: number;
        discountCost = this.cost() * (1 - discount / 100);
        return discountCost;
    }

    remove(id: number): void {
        let index: number;
        index = this.items.findIndex(product => product.id === id);
        this.items.splice(index, 1);
    }
}