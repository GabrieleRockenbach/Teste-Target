const input = document.getElementById('input');
const result = document.getElementById('result');

function reverseString(string) {
    let reverseString = "";
    for(let i = 1; i <= string.length; i++) {
        let letter = string[string.length - i];
        reverseString = reverseString + letter;
    }
    return reverseString;
}

function showResult(){
   const finalResult = input.value.trim() !== "" ?
   result.innerText = `Sua palavra ${(input.value).toUpperCase()} ao contrário é:\n${reverseString((input.value).toUpperCase())}`
   : result.innerText = 'Por favor, digite uma palavra no campo abaixo!'
  return finalResult;
}