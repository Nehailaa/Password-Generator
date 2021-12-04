let amountRange = document.getElementById('amountRange')
let amountNumbers = document.getElementById('amountNumbers')
let uppercaseElement = document.getElementById('uppercase')
let numbersElement = document.getElementById('numbers')
let symbolsElement = document.getElementById('symbols')
let form = document.getElementById('generatorForPassword')
let passwordShow = document.getElementById('passwordShow')

let UPPERCASES_CHAR_CODES = arrayFromLowToHigh(65, 90)
let LOWERCASES_CHAR_CODES = arrayFromLowToHigh(97, 122)
let NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
let SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


amountNumbers.addEventListener('input', syncCharacterAmount)
amountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  let characterAmount = amountNumbers.value
  let uppercase = uppercaseElement.checked
  let includeNumbes = numbersElement.checked
  let symbols = symbolsElement.checked
  let password = generatePassword(characterAmount, uppercase, includeNumbes, symbols)
  passwordShow.innerText = password

})

function generatePassword(characterAmount, uppercase, numbers, symbols) {
  let charCodes = LOWERCASES_CHAR_CODES
  if (uppercase) charCodes = charCodes.concat(UPPERCASES_CHAR_CODES)
  if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
  if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)

  let passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')

}

function arrayFromLowToHigh(low, high) {
  let array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  let value = e.target.value
  amountNumbers.value = value
  amountRange.value = value
}

