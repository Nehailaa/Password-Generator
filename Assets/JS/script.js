const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUpperCase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGenerator')
const passwordDisplay = document.getElementById('passwordDisplay')
const UPPERCASE_CHAR_CODES = arrayFromLowHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowHigh(33, 47).concat(
  arrayFromLowHigh(58, 64)
).concat(
  arrayFromLowHigh(91, 96)
).concat(
  arrayFromLowHigh(123,126)
)


characterAmountNumber.addEventListener('input' , syncCharacterAmount)
characterAmountRange.addEventListener('input' , syncCharacterAmount)

form.addEventListener('submit' , e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbes = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbes, includeSymbols)
  passwordDisplay.innerText = password
})
function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
  let charcodes
  
}

function arrayFromLowHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}

