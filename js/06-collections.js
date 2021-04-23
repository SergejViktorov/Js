/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const options = colorPickerOptions[0]

const btnEl = document.createElement('button');
btnEl.type = 'button';
btnEl.textContent = options.label;
btnEl.style.width = '160px';
btnEl.style.height = '40px';
btnEl.style.marginTop = '20px'
btnEl.style.backgroundColor = options.color
console.log(btnEl)

const button = document.querySelector('.color-picker');
button.appendChild(btnEl)

/*
 * Пишем функцию для создания разметки колорпикера
 */
const makeColorPickerOptions = options =>{return options.map(option => {
  const btnEl = document.createElement('button');
btnEl.type = 'button';
btnEl.textContent = options.label;
btnEl.style.width = '160px';
btnEl.style.height = '40px';
btnEl.style.marginTop = '20px'
btnEl.style.backgroundColor = options.color
})}