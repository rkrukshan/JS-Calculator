const displayScreen = document.getElementById("screen");

const appendScreen = (input) => {
    displayScreen.value=""
  displayScreen.value += input;
};

const displayClear = () => {
  displayScreen.value = 0;
};

const result = () => {
  try {
    displayScreen.value = eval(displayScreen.value);
  } catch (error) {
    displayScreen.value = "NAN";
  }
};