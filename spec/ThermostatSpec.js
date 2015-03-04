describe('Thermostat', function() {

  var thermostat = new Thermostat

  it('is initialized at 20 degrees', function() {
    expect(thermostat.temp).toBe(20);
  });

  it('can increase its temperature', function() {
    expect(thermostat.temp).toBe(20);
    thermostat.increaseTemp();
    expect(thermostat.temp).toBe(21);
  });

  it('can decrease its temperature', function() {
    expect(thermostat.temp).toBe(21);
    thermostat.decreaseTemp();
    expect(thermostat.temp).toBe(20);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat.MIN).toBe(10);
  });

  it('cannot drop below minimum temperature', function() {
    thermostat.temp = 10;
    thermostat.decreaseTemp(); 
    expect(thermostat.temp).toBe(10);
  });

  it('is initialized with power saving mode on', function() {
    expect(thermostat.isPowerSavingOn).toBe(true)
  });

  it('can switch power saving mode off', function() {
    expect(thermostat.isPowerSavingOn).toBe(true);
    thermostat.setMode(false);
    expect(thermostat.isPowerSavingOn).toBe(false);
  });

  it('it has a max temp of 32 when powersaving is off', function() {
    thermostat.isPowerSavingOn = false;
    expect(thermostat.getMax()).toBe(32);  
  });
  
  it('has a max temp of 25 when power saving is on', function() {
    thermostat.isPowerSavingOn = true;
    expect(thermostat.getMax()).toBe(25);
  });  

  it('can reset the temp to 20', function() {
    thermostat.resetTemp();
    expect(thermostat.temp).toBe(20);    
  });

  it('cannot go above maximum temperature', function() {
    thermostat.isPowerSavingOn = false;
    thermostat.temp = 32;
    thermostat.increaseTemp();
    expect(thermostat.temp).toBe(32);
  });

  it('knows what efficienecy the temp is', function(){
    thermostat.temp = 17;
    expect(thermostat.checkEfficiency()).toBe('good');
  });

  it('knows what efficienecy the temp is', function(){
    thermostat.temp = 26;
    expect(thermostat.checkEfficiency()).toBe('bad');
  });

  it('knows what efficienecy the temp is', function(){
    thermostat.temp = 24;
    expect(thermostat.checkEfficiency()).toBe('medium');
  });

});