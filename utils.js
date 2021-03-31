export function sanXProfileLi(sanXChar) {

    const li = document.createElement('li');
    li.classList.add('char');
    li.style.background = sanXChar.color;

    const h3Name = document.createElement('h3');
    h3Name.classList.add('name');
    h3Name.textContent = sanXChar.name;

    const pType = document.createElement('p');
    pType.classList.add('type');
    pType.textContent = sanXChar.type;

    const img = document.createElement('img');
    img.src = sanXChar.img;

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = sanXChar.description;

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = sanXChar.isAnimal ? 'Animal' : 'Food';

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = `$${sanXChar.price}`;

    const pFact = document.createElement('p');
    pFact.classList.add('fact');
    pFact.textContent = sanXChar.fact;

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Add to Cart';

    li.append(h3Name, pType, img, pDescription, pCategory, pPrice, pFact, button);

    return li;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id)
            return item;
    }
}

export function calcItemTotal(cartArray, productArray) {
    let overallItemTotal = 0;
    for (let item of cartArray) {
        const matchingItem = findById(productArray, item.id);
        const itemTotal = item.quantity * matchingItem.price;
        overallItemTotal = overallItemTotal + itemTotal;
        return `$${overallItemTotal}`;
    }
}

export function createTableRow(cartItem, product) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = product.name;
    tdQuantity.texxtContent = cartItem.quantity;

    const total = product.price * cartItem.quantity;
    tdPrice.textContent = `$${total}`;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}