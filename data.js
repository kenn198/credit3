const express = require('express');
const app = express();
const mongoose = require('mongoose');
const SensorData = require('./models/sensor');

mongoose.connect('mongodb://localhost:27017/Credit3', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

app.get('/sensorData', async (req, res) => {
    const sensorReading = {
        temperature: Math.random() * 10 + 20,  // Random temp between 20-30°C
        humidity: Math.random() * 20 + 40,     // Random humidity between 40-60%
        activity: Math.floor(Math.random() * 10),  // Random activity
        timestamp: Date.now()
    };

    const newSensorData = new SensorData(sensorReading);
    await newSensorData.save();  // Save to MongoDB

    // Control HVAC based on the temperature
    if (sensorReading.temperature > 28) {
        res.send('AC turned on');
    } else {
        res.send('AC turned off');
    }
});
app.get('/', (req, res) => {
    res.send('Welcome to the IoT Sensor API');
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});