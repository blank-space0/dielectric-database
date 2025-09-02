import { useState } from "react";

export default function MaterialSearchPage() {
  const [isAdvancedHidden, setIsAdvancedHidden] = useState(false);

  const toggle = () => setIsAdvancedHidden((v) => !v);

  return (
    <main>
      <section className="basic-search">
        <h2>Basic Search</h2>
        <div className="input-grid">
          <input type="text" placeholder="Material Name" />
          <input type="text" placeholder="Chemical Formula" />
          <input type="text" placeholder="IUPAC Name" />
          <input type="text" placeholder="CAS #" />
        </div>
      </section>

      <section className="advanced-search">
        <div className="advanced-header">
          <h2>Advanced Search</h2>
          <button
            className={`toggle-btn ${isAdvancedHidden ? "" : "rotate"}`}
            id="toggleButton"
            onClick={toggle}
          >
            ⌃
          </button>
        </div>

        <div className={`advanced-fields ${isAdvancedHidden ? "hidden" : ""}`}>
          <label>
            Measurement Method
            <select>
              <option>Transmission Airline</option>
              <option>Coaxial Probe</option>
              <option>Resonant Cavity</option>
            </select>
          </label>

          <label className="frequency-range">
            Frequency range
            <div className="freq-inputs">
              <input type="text" placeholder="Min" />
              <input type="text" placeholder="Max" />
              <select>
                <option>Hz</option>
                <option>kHz</option>
                <option>MHz</option>
              </select>
            </div>
          </label>

          <label>
            Temperature
            <input type="text" placeholder="100°C" />
          </label>

          <label>
            Measurement Model
            <select>
              <option>Select</option>
            </select>
          </label>

          <label>
            Network Analyzer Settings
            <input type="text" placeholder="Enter Custom Settings Here" />
          </label>
        </div>

        <button className={`search-btn ${isAdvancedHidden ? "hidden" : ""}`}>
          Search
        </button>
      </section>
    </main>
  );
}
