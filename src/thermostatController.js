var thermostat = new Thermostat
var tempDisplay = document.getElementById("temp-display");
var upButton = document.getElementById('up-button');
var downButton = document.getElementById('down-button');
var resetButton = document.getElementById('reset-button');

function checked () {
  return document.getElementById('power-saving').checked;    
}

function update () {
  if (thermostat.temp > 25){
    tempDisplay.style.color = 'red' 
  } else if (thermostat.temp <= 25 && thermostat.temp > 18) {
    tempDisplay.style.color = 'yellow'
  } else if (thermostat.temp <= 18) {
    tempDisplay.style.color = 'green' 
  }
  tempDisplay.innerHTML = thermostat.temp + "&deg C"
};

update();

upButton.addEventListener('click', function() {
  thermostat.setMode(checked());
  thermostat.increaseTemp();
  update();
});

downButton.addEventListener('click', function() {
  thermostat.decreaseTemp();
  update();
});

resetButton.addEventListener('click', function() {
  thermostat.resetTemp();
  update();
});