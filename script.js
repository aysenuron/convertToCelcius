const input = document.querySelector(".input");
const convertButton = document.querySelector(".convertButton");
const para = document.querySelector(".result");

function rounded (number) {
    return Math.round(number * 10) / 10;
}

function convertToCelsius(degree) {
    const degreeValue = degree.value;
    let celcius = (degreeValue - 32) * 5/9;

    para.textContent = degreeValue + " °F" + " = " + rounded(celcius) + " °C";

    degree.value = "";
}

convertButton.addEventListener ("click", () => 
    convertToCelsius(input));

