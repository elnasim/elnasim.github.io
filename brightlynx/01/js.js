'use strict'

let inputs = document.querySelectorAll('.js-input')
let button = document.querySelector('.js-button')

//-----------------------------------------------------
// Проверка на ввод числового значения
//-----------------------------------------------------
for (let item of inputs) {
  item.addEventListener('keyup', function () {
    let num = this.value.replace(/[^.0-9]/g, '')
    this.value = num
  })
}

//-----------------------------------------------------
// Нажатие кнопки "сложить"
//-----------------------------------------------------
button.addEventListener('click', function () {
  let sum = 0
  for (let item of inputs) {
    sum += +item.value
  }
  alert(sum)
})



