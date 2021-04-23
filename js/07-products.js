import products from './data/proucts.js'
console.log(products)
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */



  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/






/*
 * Пишем функцию для создания карточки продукта
 */
const productItemEl = document.querySelector('.js-products')
const makeProductCard = ({name, description, price}) =>{
  const productEl = document.createElement('article');
  productEl.classList.add('product');
  
  const nameEl = document.createElement('h2');
  nameEl.classList.add('product__name');
  nameEl.textContent = name;
  
  const productDescr = document.createElement('p');
  productDescr.classList.add('product__descr');
  productDescr.textContent = description;
  
  const pridctEl = document.createElement('p');
  pridctEl.classList.add('product__pridct')
  pridctEl.textContent = `цена: ${price} кредитов`;

  productEl.append(nameEl, productDescr, pridctEl );
  return productEl;
}
console.log(makeProductCard(products[0]))

const elements = products.map(makeProductCard);
console.log(elements)

productItemEl.append(...elements) ;
  
