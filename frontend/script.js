const API_URL = "http://localhost:5000/api/country";

async function searchCountry() {
  const name = document.getElementById("countryInput").value.trim();
  const continent = document.getElementById("continentSelect").value;
  const result = document.getElementById("result");

  if (!name || !continent) {
    result.innerHTML = `<div class="error">Please enter country name and select continent.</div>`;
    return;
  }

  result.innerHTML = `<div class="error">Loading country data...</div>`;

  try {
    const response = await fetch(
      `${API_URL}?name=${encodeURIComponent(name)}&continent=${encodeURIComponent(continent)}`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    result.innerHTML = `
      <div class="card">
        <div>
          <img src="${data.flag}" alt="${data.flagAlt}">
        </div>

        <div>
          <h2>${data.name}</h2>
          <p><strong>Official Name:</strong> ${data.officialName}</p>

          <div class="info-grid">
            <div class="info-box"><strong>Capital:</strong><br>${data.capital}</div>
            <div class="info-box"><strong>Continent:</strong><br>${data.continent}</div>
            <div class="info-box"><strong>Subregion:</strong><br>${data.subregion}</div>
            <div class="info-box"><strong>Languages:</strong><br>${data.languages.join(", ")}</div>
            <div class="info-box"><strong>Currencies:</strong><br>${data.currencies.join(", ")}</div>
            <div class="info-box"><strong>Population:</strong><br>${data.population.toLocaleString()}</div>
            <div class="info-box"><strong>Area:</strong><br>${data.area.toLocaleString()} km²</div>
            <div class="info-box"><strong>Timezone:</strong><br>${data.timezone}</div>
          </div>

          <p class="description">${data.description}</p>

          <a class="map-link" href="${data.maps}" target="_blank">
            View on Google Maps
          </a>
        </div>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<div class="error">${error.message}</div>`;
  }
}