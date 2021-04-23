import transactions from './data/transactions.js'

const makeTransactionMarkup = ({id, amount, date, business, type, name, account}) =>{
  return `<tr>
  <td>${id}</td>
  <td>${amount}</td>
  <td>${date}</td>
  <td>${business}</td>
  <td>${type}</td>
  <td>${name}</td>
  <td>${account}</td>
</tr>`
}

 
const tableEl = document.querySelector('.js-transaction-table');
 const makeTrans = transactions.map(makeTransactionMarkup).join('');
 tableEl.insertAdjacentHTML('beforeend', makeTrans)