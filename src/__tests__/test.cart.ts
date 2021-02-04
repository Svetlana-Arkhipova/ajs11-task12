import Cart from '../cart';
import Movie from '../movie';


test('add movie', () => {
    let cart = new Cart();
    const mov1 = new Movie(145,'mov',35,'mov1',true,2020,'rus','rus','comedy','145');   
    cart.add(mov1);
    expect(cart).toEqual({
        "items": [
          {
            "id": 145,
            "name": "mov",
            "price": 35,
            "originalName": "mov1",
            "imax": true,
            "releaseYear": 2020,
            "country": "rus",
            "slogan": "rus",
            "genre": "comedy",
            "duration": "145"
          }
        ]
    });
});

test('calculate cost', () => {
    let cart = new Cart();
    const mov1 = new Movie(145,'mov',35,'mov1',true,2020,'rus','rus','comedy','145');
    const mov2 = new Movie(146,'mov',45,'mov2',true,2020,'rus','rus','comedy','145');
    cart.add(mov1);
    cart.add(mov2);
    expect(cart.cost()).toBe(80);
});

test('calculate discounted cost', () => {
    let cart = new Cart();
    const mov1 = new Movie(145,'mov',35,'mov1',true,2020,'rus','rus','comedy','145');
    const mov2 = new Movie(146,'mov',45,'mov2',true,2020,'rus','rus','comedy','145');
    cart.add(mov1);
    cart.add(mov2);
    expect(cart.discountCost(10)).toBe(72);
});

test('remove item', () => {
    let cart = new Cart();
    const mov1 = new Movie(145,'mov',35,'mov1',true,2020,'rus','rus','comedy','145');
    const mov2 = new Movie(146,'mov',45,'mov2',true,2020,'rus','rus','comedy','145');
    cart.add(mov1);
    cart.add(mov2);
    cart.remove(146);
    expect(cart).toEqual({
        "items": [
          {
            "id": 145,
            "name": "mov",
            "price": 35,
            "originalName": "mov1",
            "imax": true,
            "releaseYear": 2020,
            "country": "rus",
            "slogan": "rus",
            "genre": "comedy",
            "duration": "145"
          }
        ]
    });
});
