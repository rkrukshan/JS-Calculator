const displayScreen = document.getElementById("screen");

const display = (input) => {
  displayScreen.value += input;
};

const displayClear = () => {
  displayScreen.value = 0;
};

const result = () => {
  try {
    displayScreen.value = eval(displayScreen);
  } catch (error) {
    displayScreen.value = "NAN";
  }
};