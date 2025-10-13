import { useState } from "react";

export default function MaterialSearchPage() {
  // Advanced Search hidden by default
  const [isAdvancedHidden, setIsAdvancedHidden] = useState(true);

  // Basic search state
  const [searchMode, setSearchMode] = useState("materialName");
  const [query, setQuery] = useState("");

  const toggleAdvanced = () => setIsAdvancedHidden((v) => !v);

  const handleBasicSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchMode}: ${query}`);
  };

  return (
    <main>
      {/* ===== Basic Search ===== */}
      <section className="basic-search">
        <h2>Basic Search</h2>

        <form className="unified-search" onSubmit={handleBasicSearch}>
          <div className="search-group">
            {/* Fixed-width dropdown on the left with rotating arrow */}
            <div className="select-with-arrow">
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
          <div className="toggle-controls">
            <button
              className={`toggle-btn ${isAdvancedHidden ? "" : "rotate"}`}
              onClick={toggleAdvanced}
            >
              ⌃
            </button>
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
              <input type="text" placeholder="Min" className="freq-input" />
              <input type="text" placeholder="Max" className="freq-input" />
              <div className="select-with-arrow">
                <select className="freq-unit-select">
                  <option>Hz</option>
                  <option>kHz</option>
                  <option>MHz</option>
                </select>
              </div>
            </div>
          </label>

          <label>
            Temperature
            <input type="text" placeholder="100°C" className="advanced-input" />
          </label>

          <label>
            Measurement Model
            <div className="select-with-arrow">
              <select className="advanced-select">
                <option>Select</option>
              </select>
            </div>
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

