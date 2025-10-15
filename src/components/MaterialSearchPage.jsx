import { useState } from "react";

export default function MaterialSearchPage() {
  // Advanced Search hidden by default
  const [isAdvancedHidden, setIsAdvancedHidden] = useState(true);

  // Basic search state
  const [searchMode, setSearchMode] = useState("materialName");
  const [query, setQuery] = useState("");

  // Advanced Search frequency state
  const [freqMin, setFreqMin] = useState("");
  const [freqMax, setFreqMax] = useState("");

  const toggleAdvanced = () => setIsAdvancedHidden((v) => !v);

  const handleBasicSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchMode}: ${query}`);
  };

  // Numeric input validation for frequency fields
  const handleFreqInputChange = (value, setter) => {
    // For number inputs, browser handles basic validation
    // Allow empty string for clearing input
    if (value === '' || value === null || value === undefined) {
      setter('');
      return;
    }

    // Convert to string and set value
    setter(String(value));
  };

  return (
    <main>
      {/* ===== Basic Search ===== */}
      <section className="basic-search">
        <h2>Basic Search</h2>

        <form className="unified-search" onSubmit={handleBasicSearch}>
          <div className="search-group">
            {/* Fixed-width dropdown on the left with rotating arrow */}
            <div className="select-with-arrow check">
              <select
                value={searchMode}
                onChange={(e) => setSearchMode(e.target.value)}
                className="search-mode-box"
              >
                <option value="materialName">Material Name</option>
                <option value="chemicalFormula">Chemical Formula</option>
              </select>
            </div>

            {/* Flexible text input on the right */}
            <input
              type="text"
              placeholder={
                searchMode === "materialName"
                  ? "Search by material name..."
                  : "Search by chemical formula..."
              }
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input-flex"
              autoFocus
            />
          </div>

          {/* Submit button */}
          <button type="submit" className="search-submit-btn">
            Search
          </button>
        </form>
      </section>

      {/* ===== Advanced Search ===== */}
      <section className="advanced-search">
        <div className="advanced-header">
          <h2>Advanced Search</h2>
          <div
            className="toggle-controls"
            onClick={toggleAdvanced}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleAdvanced()}
          >
            <span className={`toggle-btn ${isAdvancedHidden ? "" : "rotate"}`}>
              ⌃
            </span>
            <span className="toggle-label">Toggle</span>
          </div>
        </div>

        {/* Advanced fields container */}
        <div className={`advanced-fields ${isAdvancedHidden ? "hidden" : ""}`}>
          <label>
            Measurement Method
            <div className="select-with-arrow">
              <select className="advanced-select">
                <option>Transmission Airline</option>
                <option>Coaxial Probe</option>
                <option>Resonant Cavity</option>
              </select>
            </div>
          </label>

          <label className="frequency-range">
            Frequency range
            <div className="freq-inputs">
              <input
                type="number"
                placeholder="Min"
                className="freq-input"
                value={freqMin}
                onChange={(e) => handleFreqInputChange(e.target.value, setFreqMin)}
                min="0"
                step="any"
              />
              <input
                type="number"
                placeholder="Max"
                className="freq-input"
                value={freqMax}
                onChange={(e) => handleFreqInputChange(e.target.value, setFreqMax)}
                min="0"
                step="any"
              />
              <div className="select-with-arrow special">
                <select className="freq-unit-select">
                  <option>Hz</option>
                  <option>kHz</option>
                  <option>MHz</option>
                </select>
              </div>
            </div>
          </label>

          <label>
            Measurement Model
            <div className="select-with-arrow">
              <select className="advanced-select">
                <option>Select</option>
              </select>
            </div>
          </label>

          <label>
            Temperature
            <input type="text" placeholder="100°C" className="advanced-input" />
          </label>
        </div>

        {/* Advanced search button */}
        <button className={`search-btn ${isAdvancedHidden ? "hidden" : ""}`}>
          Search
        </button>
      </section>
    </main>
  );
}

