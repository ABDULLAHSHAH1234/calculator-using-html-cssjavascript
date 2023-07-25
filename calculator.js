let resultElement = document.getElementById("result");
let currentInput = "";

function appendToResult(value) {
  currentInput += value;
  resultElement.value = currentInput;
}

function calculateResult() {
  try {
    let result = eval(currentInput);
    resultElement.value = result;
    currentInput = result.toString();
  } catch (error) {
    resultElement.value = "Error";
    currentInput = "";
  }
}

function clearResult() {
  currentInput = "";
  resultElement.value = "";
}
