import React, { useState } from 'react';

const countryData = [
  { name: 'Pakistan', cities: ['Karachi', 'Lahore', 'Islamabad'] },
  { name: 'India', cities: ['Mumbai', 'Delhi', 'Bangalore'] },
  { name: 'Afghanistan', cities: ['Kabul', 'Herat', 'Mazar-i-Sharif'] }
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
    setSelectedCity(''); // Reset city selection when changing countries
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h2>Country and City Selector</h2>
      <label htmlFor="countrySelect">Select a country:</label>
      <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Select Country--</option>
        {countryData.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div>
          <label htmlFor="citySelect">Select a city:</label>
          <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
            <option value="">--Select City--</option>
            {countryData
              .find((country) => country.name === selectedCountry)
              .cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
