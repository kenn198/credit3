const sensordata = require('./models/Sensor.js');

if (sensordata.temperature > 28) {
    console.log('Turning AC on');
} else {
    console.log('Turning AC off');
}
