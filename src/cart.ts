import Buyable from './buyable'; 

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void { this.items.push(item); }

    getAll(): Buyable[] { return [...this.items]; }

    cost(): number {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    discountCost(discount: number): number {
        return this.cost() * (1 - discount / 100);
    }

    remove(id: number): void {
        const index = this.items.findIndex(product => product.id === id);
        this.items.splice(index, 1);
    }
}