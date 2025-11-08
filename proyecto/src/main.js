const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (button.id === "clear") {
      currentInput = "";
      display.value = "";
      return;
    }

    if (button.id === "equal") {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
