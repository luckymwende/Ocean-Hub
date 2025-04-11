import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const incidents = [
  {
    id: 1,
    location: { lat: -4.0435, lng: 39.6682 },
    description: 'Suspicious fishing activity reported near Mombasa',
    date: '2024-03-15',
    status: 'Under Investigation',
  },
  {
    id: 2,
    location: { lat: -3.3333, lng: 40.1167 },
    description: 'Unauthorized fishing vessel spotted near Lamu',
    date: '2024-03-14',
    status: 'Confirmed',
  },
  {
    id: 3,
    location: { lat: -4.0500, lng: 39.7000 },
    description: 'Illegal fishing gear found near Diani Beach',
    date: '2024-03-13',
    status: 'Resolved',
  },
  // Add more incidents as needed
];

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -4.0435,
  lng: 39.6682, // Mombasa coordinates
};

const statusColors = {
  'Under Investigation': 'bg-yellow-100 text-yellow-800',
  'Confirmed': 'bg-red-100 text-red-800',
  'Resolved': 'bg-green-100 text-green-800',
};

const mapStyles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#004358" }]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#f5f5f5" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }]
  },
];

export default function IllegalFishingTracker() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [mapError, setMapError] = useState(null);
  const [formData, setFormData] = useState({
    location: 'Mombasa',
    description: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleMarkerClick = (incident) => {
    setSelectedIncident(incident);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitting report:', formData);
    setShowReportForm(false);
    // You could also add the new incident to the incidents array
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMapLoad = () => {
    setMapError(null);
  };

  const handleMapError = (error) => {
    console.error('Google Maps Error:', error);
    setMapError('Failed to load the map. Please check your internet connection.');
  };

  const renderMapContent = () => {
    if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
      return (
        <div className="flex items-center justify-center h-[500px] bg-ocean-blue-50">
          <div className="text-center p-8">
            <p className="text-ocean-blue-600 mb-4">
              Please configure your Google Maps API key in the .env file to view the map.
            </p>
            <p className="text-sm text-ocean-blue-400">
              Set VITE_GOOGLE_MAPS_API_KEY in your environment variables.
            </p>
          </div>
        </div>
      );
    }

    if (mapError) {
      return (
        <div className="flex items-center justify-center h-[500px] bg-ocean-blue-50">
          <div className="text-center p-8">
            <p className="text-red-600 mb-4">{mapError}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="text-ocean-blue-600 hover:text-ocean-blue-500 underline"
            >
              Try reloading the page
            </button>
          </div>
        </div>
      );
    }

    return (
      <LoadScript 
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log('Google Maps Script loaded')}
        onError={handleMapError}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={8}
          options={{
            styles: mapStyles,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
          }}
          onLoad={handleMapLoad}
        >
          {incidents.map((incident) => (
            <Marker
              key={incident.id}
              position={incident.location}
              onClick={() => handleMarkerClick(incident)}
              animation={window.google?.maps.Animation.DROP}
              icon={{
                url: `data:image/svg+xml,${encodeURIComponent(
                  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="${
                      incident.status === 'Confirmed' ? '#ef4444' :
                      incident.status === 'Under Investigation' ? '#eab308' :
                      '#22c55e'
                    }"/>
                    <circle cx="12" cy="12" r="4" fill="white"/>
                  </svg>`
                )}`,
                scaledSize: { width: 30, height: 30 },
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-ocean-blue-900 sm:text-4xl">
            Kenya Illegal Fishing Tracker
          </h1>
          <p className="mt-4 text-lg text-ocean-blue-600">
            Report and track suspicious fishing activities in Kenya's territorial waters
          </p>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {Object.entries(statusColors).map(([status, colorClass]) => (
                <div key={status} className={`px-3 py-1 rounded-full text-sm ${colorClass}`}>
                  {status}
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowReportForm(true)}
              className="btn-primary"
            >
              Report Incident
            </button>
          </div>

          {/* Map Section */}
          <div className="bg-ocean-blue-50 rounded-lg overflow-hidden shadow-lg">
            {renderMapContent()}
          </div>

          {/* Incident List */}
          <div className="mt-8 space-y-4">
            {incidents.map((incident) => (
              <div
                key={incident.id}
                className={`p-4 rounded-lg border ${
                  selectedIncident?.id === incident.id
                    ? 'border-ocean-blue-500 bg-ocean-blue-50'
                    : 'border-gray-200 bg-white'
                } hover:border-ocean-blue-500 transition-colors cursor-pointer`}
                onClick={() => handleMarkerClick(incident)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-ocean-blue-900">
                      {incident.description}
                    </h3>
                    <p className="text-sm text-ocean-blue-600 mt-1">
                      Reported on {incident.date}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[incident.status]}`}>
                    {incident.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Report Form Modal */}
        {showReportForm && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-lg font-medium text-ocean-blue-900 mb-4">Report an Incident</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-ocean-blue-700">Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                  >
                    <option>Mombasa</option>
                    <option>Lamu</option>
                    <option>Malindi</option>
                    <option>Diani Beach</option>
                    <option>Watamu</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-ocean-blue-700">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                    placeholder="Describe the suspicious activity..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ocean-blue-700">Date Observed</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowReportForm(false)}
                    className="px-4 py-2 text-sm font-medium text-ocean-blue-600 hover:text-ocean-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-ocean-blue-600 rounded-md hover:bg-ocean-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-blue-500"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 