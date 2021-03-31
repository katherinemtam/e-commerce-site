import { sanX } from './products-data.js';
import { sanXProfileLi } from '../utils.js';

const ul = document.querySelector('.char-list');

for (let sanXChar of sanX) {
    const li = sanXProfileLi(sanXChar);
    ul.append(li);
}