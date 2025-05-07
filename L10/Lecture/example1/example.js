const increaseButtonElement = document.getElementById("increase");
const decreaseButtonElement = document.getElementById("decrease");
const counterElement = document.getElementById("counter");

const handleCounter = (currentValue, action) => {
  switch (action) {
    case "increment":
      return currentValue + 1;
    case "decrement":
      return currentValue - 1;
    default:
      throw new Error("Invalid action");
  }
};

counterElement.innerText = 0;

const handleClick = (action) => {
  const currentValue = +counterElement.innerText;
  const newValue = handleCounter(currentValue, action);
  counterElement.innerText = newValue;
};

increaseButtonElement.addEventListener("click", () => {
  handleClick("increment");
});

decreaseButtonElement.addEventListener("click", () => {
  handleClick("decrement");
});
