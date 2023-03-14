
let products = ['Хліб', 'Молоко', 'Яйця', 'Сир', 'Мясо', 'Овочі', 'Фрукти'];


let boughtList = document.getElementById('boughtList');
let toBuyList = document.getElementById('toBuyList');

function addProductToList(product, list) {
  let item = document.createElement('li');
  item.textContent = product;
  item.addEventListener('click', function() {
    moveProductBetweenLists(item, list);
  });
  list.appendChild(item);
}

function moveProductBetweenLists(item, list) {
  if (list === boughtList) {
    toBuyList.appendChild(item);
  } else {
    boughtList.appendChild(item);
  }
}

for (let i = 0; i < products.length; i++) {
  addProductToList(products[i], toBuyList);
}
