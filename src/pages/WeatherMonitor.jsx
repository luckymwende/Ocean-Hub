import React from 'react';

const weatherData = [
  {
    id: 1,
    location: 'Mombasa Coast',
    temperature: 28,
    windSpeed: 15,
    waveHeight: 1.5,
    conditions: 'Sunny',
    forecast: 'Clear skies expected, perfect for beach activities',
    timestamp: '2024-03-15 10:00'
  },
  {
    id: 2,
    location: 'Lamu Archipelago',
    temperature: 27,
    windSpeed: 12,
    waveHeight: 1.2,
    conditions: 'Partly Cloudy',
    forecast: 'Light showers possible, good for marine life observation',
    timestamp: '2024-03-15 10:00'
  },
  {
    id: 3,
    location: 'Malindi Marine Park',
    temperature: 29,
    windSpeed: 18,
    waveHeight: 2.0,
    conditions: 'Windy',
    forecast: 'Strong winds expected, caution advised for water activities',
    timestamp: '2024-03-15 10:00'
  }
];

function WeatherMonitor() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-ocean-blue-600 mb-6">Kenya Coastal Weather Monitor</h1>
      <p className="text-gray-600 mb-8">
        Real-time weather data and forecasts for Kenya's coastal regions. Plan your ocean conservation activities with accurate weather information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weatherData.map(location => (
          <div key={location.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-ocean-blue-600 mb-4">{location.location}</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Temperature</span>
                <span className="text-2xl font-bold text-ocean-blue-500">{location.temperature}°C</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Wind Speed</span>
                <span className="text-lg font-semibold">{location.windSpeed} km/h</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Wave Height</span>
                <span className="text-lg font-semibold">{location.waveHeight} m</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Conditions</span>
                <span className="text-lg font-semibold">{location.conditions}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-ocean-blue-600 mb-2">Forecast</h3>
              <p className="text-gray-600">{location.forecast}</p>
              <p className="text-sm text-gray-500 mt-2">Last updated: {location.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-ocean-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-ocean-blue-600 mb-4">Weather Alerts</h2>
        <p className="text-gray-600">
          No active weather alerts at this time. Check back regularly for updates on Kenya's coastal conditions.
        </p>
      </div>
    </div>
  );
}

export default WeatherMonitor; 