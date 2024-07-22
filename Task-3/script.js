document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.querySelector("#celsius");
    const fahrenheitInput = document.querySelector("#fahrenheit");
    const kelvinInput = document.querySelector("#kelvin");
    const convertBtn = document.querySelector(".btn");

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    function convertTemperature() {
        let cTemp, fTemp, kTemp;

        if (celsiusInput.value !== "") {
            cTemp = parseFloat(celsiusInput.value);
            fTemp = (cTemp * (9 / 5)) + 32;
            kTemp = cTemp + 273.15;
        } else if (fahrenheitInput.value !== "") {
            fTemp = parseFloat(fahrenheitInput.value);
            cTemp = (fTemp - 32) * (5 / 9);
            kTemp = (fTemp - 32) * (5 / 9) + 273.15;
        } else if (kelvinInput.value !== "") {
            kTemp = parseFloat(kelvinInput.value);
            cTemp = kTemp - 273.15;
            fTemp = (kTemp - 273.15) * (9 / 5) + 32;
        } else {
            alert("Please enter a value in at least one of the fields.");
            return;
        }

        if (!isNaN(cTemp) && !isNaN(fTemp) && !isNaN(kTemp)) {
            celsiusInput.value = roundNumber(cTemp);
            fahrenheitInput.value = roundNumber(fTemp);
            kelvinInput.value = roundNumber(kTemp);
        } else {
            alert("Please enter a valid number.");
        }
    }

    convertBtn.addEventListener('click', convertTemperature);

    // Clear other inputs when user starts typing in one
    [celsiusInput, fahrenheitInput, kelvinInput].forEach(input => {
        input.addEventListener('input', function() {
            [celsiusInput, fahrenheitInput, kelvinInput].forEach(otherInput => {
                if (otherInput !== this) {
                    otherInput.value = "";
                }
            });
        });
    });
});