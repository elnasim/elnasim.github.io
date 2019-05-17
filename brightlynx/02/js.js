'use strict'

let input = document.querySelector('.js-input')
let button = document.querySelector('.js-button')
let letters = 'ABCDEFGH'
let result = ''
let validate = false

//-----------------------------------------------------
// Проверка существования позиции
//-----------------------------------------------------
function validatePosition (posX, posY) {
  if (posX > 7 || posX < 0 || posY > 8 || posY < 1) {
    alert('Ошибка ввода позиции, такой не существует на шахматной доске')
    validate = false
    return
  }

  validate = true
}

//-----------------------------------------------------
// Проверка длины вводимой строки
//-----------------------------------------------------
function validateInput (position) {
  if (position.length !== 2) {
    alert('Ошибка ввода позиции, необходимо ввести 2 символа')
    validate = false
    return
  }

  validate = true
}

//-----------------------------------------------------
// Нажатие кнопки "ОК"
//-----------------------------------------------------
button.addEventListener('click', function () {

  let position = input.value

  validateInput(position)

  if (!validate) return

  let letter = position[0].toUpperCase() // буквенная позиция
  let num = +position[1] // цифровая позиция

  let numLetter = +letters.indexOf(letter) // Числовое значение буквы

  validatePosition(numLetter, num)

  if (!validate) return

  if (numLetter - 1 >= 0 && num + 2 <= 8) result += ` ${letters[numLetter - 1]}${num + 2}`
  if (numLetter - 2 >= 0 && num + 1 <= 8) result += ` ${letters[numLetter - 2]}${num + 1}`

  if (numLetter + 1 < 8 && num + 2 <= 8) result += ` ${letters[numLetter + 1]}${num + 2}`
  if (numLetter + 2 < 8 && num + 1 <= 8) result += ` ${letters[numLetter + 2]}${num + 1}`

  if (numLetter - 2 >= 0 && num - 1 > 0) result += ` ${letters[numLetter - 2]}${num - 1}`
  if (numLetter - 1 >= 0 && num - 2 > 0) result += ` ${letters[numLetter - 1]}${num - 2}`

  if (numLetter + 2 < 8 && num - 1 > 0) result += ` ${letters[numLetter + 2]}${num - 1}`
  if (numLetter + 1 < 8 && num - 2 > 0) result += ` ${letters[numLetter + 1]}${num - 2}`

  alert(result)

  result = ''

})



