const express = require("express");
const cors = require("cors");
const axios = require("axios");
const wiki = require("wikipedia");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/country", async (req, res) => {

  const { name, continent } = req.query;

  if (!name) {
    return res.status(400).json({
      message: "Country name is required"
    });
  }

  try {

    // ===============================
    // REST COUNTRIES API
    // ===============================

    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );

    const country = response.data[0];

    // Validate continent
    if (continent && country.region !== continent) {
      return res.status(400).json({
        message: `${country.name.common} belongs to ${country.region}, not ${continent}`
      });
    }

    // ===============================
    // WIKIPEDIA API
    // ===============================

    let summary = "No description available.";

    try {

      const page = await wiki.page(country.name.common);

      const wikiSummary = await page.summary();

      summary = wikiSummary.extract;

    } catch (wikiError) {

      console.log("Wikipedia fetch failed");

    }

    // ===============================
    // FORMATTED DATA
    // ===============================

    const formattedCountry = {

      name: country.name.common,

      officialName: country.name.official,

      capital: country.capital
        ? country.capital[0]
        : "Not available",

      continent: country.region,

      subregion: country.subregion || "Not available",

      population: country.population,

      area: country.area,

      timezone: country.timezones
        ? country.timezones.join(", ")
        : "Not available",

      flag: country.flags.png,

      flagAlt:
        country.flags.alt ||
        `${country.name.common} flag`,

      maps:
        country.maps?.googleMaps || "#",

      languages: country.languages
        ? Object.values(country.languages)
        : ["Not available"],

      currencies: country.currencies
        ? Object.values(country.currencies).map(
            cur =>
              `${cur.name} (${cur.symbol || "No symbol"})`
          )
        : ["Not available"],

      description: summary
    };

    res.json(formattedCountry);

  } catch (error) {

    console.log(error.message);

    res.status(404).json({
      message: "Country not found"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});