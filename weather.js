//fuction for converting f to C
function convertToFahrenheit(temp) {
    return (temp - 32) * 5 / 9;
}
// function to convert C to k
let convertToKelvin = function(temp) {
    return temp + 273.15;
};

// function performing actual conversion
function Conversion() {
    let tempInput = document.getElementById("temp");
    let fahrenheit = parseFloat(tempInput.value);
    if (!isNaN(fahrenheit)) {
        let celsius = convertToFahrenheit(fahrenheit);
        let kelvin = convertToKelvin(celsius);
        alert(fahrenheit + '°F = ' + celsius.toFixed(2) + '°C = ' + kelvin.toFixed(2) + 'K');
    } else {
        alert("Please enter a valid temperature value.");
    }
}
document.getElementById("convertor").addEventListener("click", Conversion);

//showing current data on footer
var currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
document.getElementById('footer').innerHTML += " | Date: " + formattedDate;