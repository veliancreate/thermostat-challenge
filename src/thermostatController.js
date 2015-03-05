$('document').ready(function() {
  var thermostat = new Thermostat;

  update(getColour());

  function checked() {
    return $('#power-saving').is(':checked');
  };


  function getColour() {
    inc2 = 255;
    inc = 30 * (thermostat.temp -10);
    inc2 -= (30 * (thermostat.temp - 25));
    if (thermostat.temp < 25) return "rgba(" + inc + ", 255, 0, 1)";
    return "rgba(255, " + inc2 + ", 0, 1)";
  }

  function update(colour) {
    $('body').css('background-color', colour)
    $('#temp-display').text(thermostat.temp)
    var temp = 100-((thermostat.temp-10)*3.90);
    if(thermostat.temp === 32){
      $('#black').hide();
    }else{
      $('#black').show();
    };
    $('#black').css('height', temp + '%');
    $('#temp-display').parent().toggleClass('flipper');  
  };


  $('#up-button').click(function() {
    thermostat.setMode(checked());
    thermostat.increaseTemp();
    update(getColour());
  });

  $('#down-button').click(function() {
    thermostat.decreaseTemp();
    update(getColour());
  });

  $('#reset-button').click(function() {
    thermostat.resetTemp();
    update(getColour());
  });  

  $('#power-saving').click(function() {
    thermostat.resetTemp();
    update(getColour());
  });

});



