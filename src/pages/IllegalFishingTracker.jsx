import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const incidents = [
  {
    id: 1,
    location: 'Mombasa Coast',
    date: '2024-03-15',
    type: 'Illegal Trawling',
    status: 'Under Investigation',
    description: 'Multiple vessels observed engaging in illegal bottom trawling in protected marine area.',
    coordinates: { lat: -4.0435, lng: 39.6682 }
  },
  {
    id: 2,
    location: 'Lamu Archipelago',
    date: '2024-03-14',
    type: 'Unauthorized Fishing',
    status: 'Confirmed',
    description: 'Foreign vessels fishing without proper permits in local waters.',
    coordinates: { lat: -2.2719, lng: 40.9022 }
  },
  {
    id: 3,
    location: 'Malindi Marine Park',
    date: '2024-03-13',
    type: 'Illegal Gear',
    status: 'Resolved',
    description: 'Use of prohibited fishing gear in protected marine park.',
    coordinates: { lat: -3.2187, lng: 40.1167 }
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -4.0435,
  lng: 39.6682, // Mombasa coordinates
};

const mapStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ffffff' }, { lightness: 17 }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 18 }]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }, { lightness: 16 }]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }, { lightness: 21 }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#dedede' }, { lightness: 21 }]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }]
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#f2f2f2' }, { lightness: 19 }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [{ color: '#fefefe' }, { lightness: 20 }]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }]
  }
];

export default function IllegalFishingTracker() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [showReportForm, setShowReportForm] = useState(false);
  const [newReport, setNewReport] = useState({
    location: '',
    type: '',
    description: ''
  });
  const [mapError, setMapError] = useState(null);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    // In a real app, this would send the report to a backend server
    console.log('Submitting report:', newReport);
    setShowReportForm(false);
    setNewReport({ location: '', type: '', description: '' });
  };

  const handleMapLoad = () => {
    setMapError(null);
  };

  const handleMapError = (error) => {
    console.error('Google Maps Error:', error);
    setMapError('Failed to load the map. Please check your internet connection.');
  };

  return (
    <div className="min-h-screen bg-ocean-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ocean-blue-900 mb-4">Illegal Fishing Tracker</h1>
          <p className="text-lg text-ocean-blue-600">Monitor and report illegal fishing activities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Incidents List */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-ocean-blue-900">Recent Incidents</h2>
              <button
                onClick={() => setShowReportForm(true)}
                className="bg-ocean-blue-600 text-white px-4 py-2 rounded-md hover:bg-ocean-blue-700"
              >
                Report Incident
              </button>
            </div>
            
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div
                  key={incident.id}
                  className="border-l-4 border-ocean-blue-500 bg-ocean-blue-50 p-4 cursor-pointer hover:bg-ocean-blue-100"
                  onClick={() => setSelectedIncident(incident)}
                >
                  <h3 className="font-semibold text-ocean-blue-900">{incident.location}</h3>
                  <p className="text-sm text-ocean-blue-600">{incident.date}</p>
                  <p className="text-sm text-ocean-blue-700 mt-1">{incident.type}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                    incident.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    incident.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {incident.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-ocean-blue-900 mb-6">Incident Map</h2>
            {!import.meta.env.VITE_GOOGLE_MAPS_API_KEY ? (
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
            ) : mapError ? (
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
            ) : (
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
                      position={incident.coordinates}
                      onClick={() => setSelectedIncident(incident)}
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
            )}
          </div>
        </div>

        {/* Report Form Modal */}
        {showReportForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mb-4">Report New Incident</h2>
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-ocean-blue-700">Location</label>
                  <input
                    type="text"
                    value={newReport.location}
                    onChange={(e) => setNewReport({ ...newReport, location: e.target.value })}
                    className="mt-1 block w-full rounded-md border-ocean-blue-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ocean-blue-700">Type</label>
                  <select
                    value={newReport.type}
                    onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                    className="mt-1 block w-full rounded-md border-ocean-blue-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="Illegal Trawling">Illegal Trawling</option>
                    <option value="Unauthorized Fishing">Unauthorized Fishing</option>
                    <option value="Illegal Gear">Illegal Gear</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-ocean-blue-700">Description</label>
                  <textarea
                    value={newReport.description}
                    onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
                    className="mt-1 block w-full rounded-md border-ocean-blue-300 shadow-sm focus:border-ocean-blue-500 focus:ring-ocean-blue-500"
                    rows="3"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowReportForm(false)}
                    className="px-4 py-2 text-ocean-blue-700 hover:text-ocean-blue-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-ocean-blue-600 text-white rounded-md hover:bg-ocean-blue-700"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Incident Details Modal */}
        {selectedIncident && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-2xl font-semibold text-ocean-blue-900 mb-4">Incident Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-ocean-blue-900">{selectedIncident.location}</h3>
                  <p className="text-sm text-ocean-blue-600">{selectedIncident.date}</p>
                </div>
                <div>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    selectedIncident.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                    selectedIncident.status === 'Under Investigation' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedIncident.status}
                  </span>
                </div>
                <div>
                  <p className="text-ocean-blue-700">{selectedIncident.type}</p>
                </div>
                <div>
                  <p className="text-ocean-blue-700">{selectedIncident.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedIncident(null)}
                className="mt-6 w-full px-4 py-2 bg-ocean-blue-600 text-white rounded-md hover:bg-ocean-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 