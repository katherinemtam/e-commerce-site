// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { sanXProfileLi } from '../utils.js';

const test = QUnit.test;

test('should take in a character object and return li element', (expect) => {
    const expected = '<li class="char" style="background: rgb(255, 255, 255);"><h3 class="name">Shirokuma</h3><p class="type">polar bear</p><img src="http://www.san-x.jp/img/characters/sumikko/shirokuma.png"><p class="description">Shirokuma is a shy bear who migrated south to avoid the cold. Shirokuma feels most calm while drinking hot tea in a corner.</p><p class="category">Animal</p><p class="price">$2</p><p class="fact">Close friends with Furoshiki.</p><button class="button">Add to Cart</button></li>';

    const actual = sanXProfileLi({
        name: 'Shirokuma',
        type: 'polar bear',
        color: 'rgb(255, 255, 255)',
        img: 'http://www.san-x.jp/img/characters/sumikko/shirokuma.png',
        description: 'Shirokuma is a shy bear who migrated south to avoid the cold. Shirokuma feels most calm while drinking hot tea in a corner.',
        isAnimal: true,
        price: 2,
        fact: 'Close friends with Furoshiki.'
    });

    expect.equal(actual.outerHTML, expected);
});
