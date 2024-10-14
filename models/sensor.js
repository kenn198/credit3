const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    activity: Number,
    timestamp: Date
}, { collection: 'sensor' });

const SensorData = mongoose.model('SensorData', sensorSchema);

module.exports = SensorData;
