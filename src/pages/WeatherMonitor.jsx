import { useState } from 'react';

// Mock weather data - in a real app, this would come from an API
const weatherData = {
  current: {
    temperature: 28,
    windSpeed: 12,
    waveHeight: 1.5,
    visibility: 'Good',
    conditions: 'Sunny',
  },
  forecast: [
    {
      date: '2024-03-16',
      temperature: 29,
      windSpeed: 10,
      waveHeight: 1.2,
      conditions: 'Partly Cloudy',
    },
    {
      date: '2024-03-17',
      temperature: 27,
      windSpeed: 15,
      waveHeight: 2.0,
      conditions: 'Cloudy',
    },
    // Add more forecast data
  ],
  alerts: [
    {
      id: 1,
      type: 'warning',
      message: 'Strong winds expected tomorrow along the coast',
      severity: 'moderate',
    },
    {
      id: 2,
      type: 'info',
      message: 'Good fishing conditions today in Mombasa',
      severity: 'low',
    },
  ],
};

export default function WeatherMonitor() {
  const [selectedLocation, setSelectedLocation] = useState('Mombasa');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kenya Coastal Weather & Fishing Conditions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Real-time marine weather updates and fishing conditions for Kenya's coastal regions
          </p>
        </div>

        <div className="mt-8">
          {/* Location Selector */}
          <div className="mb-6">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option>Mombasa</option>
              <option>Lamu</option>
              <option>Malindi</option>
              <option>Diani Beach</option>
              <option>Watamu</option>
            </select>
          </div>

          {/* Current Conditions */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Conditions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Temperature</div>
                <div className="text-2xl font-semibold text-gray-900">{weatherData.current.temperature}°C</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Wind Speed</div>
                <div className="text-2xl font-semibold text-gray-900">{weatherData.current.windSpeed} km/h</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Wave Height</div>
                <div className="text-2xl font-semibold text-gray-900">{weatherData.current.waveHeight} m</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Visibility</div>
                <div className="text-2xl font-semibold text-gray-900">{weatherData.current.visibility}</div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alerts</h2>
            <div className="space-y-4">
              {weatherData.alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg ${
                    alert.severity === 'moderate'
                      ? 'bg-yellow-50 border border-yellow-200'
                      : 'bg-blue-50 border border-blue-200'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {alert.severity === 'moderate' ? (
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Forecast */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Forecast</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {weatherData.forecast.map((day) => (
                <div key={day.date} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">{day.date}</div>
                  <div className="mt-2">
                    <div className="text-lg font-medium text-gray-900">{day.conditions}</div>
                    <div className="mt-2 space-y-1">
                      <div className="text-sm text-gray-600">
                        Temperature: {day.temperature}°C
                      </div>
                      <div className="text-sm text-gray-600">
                        Wind: {day.windSpeed} km/h
                      </div>
                      <div className="text-sm text-gray-600">
                        Waves: {day.waveHeight} m
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 