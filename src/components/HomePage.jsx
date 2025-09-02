export default function HomePage() {
  return (
    <main className="main">
      <h1 className="title">Dielectric Properties Database</h1>
      <p className="subtitle">
        NETL’s new dielectric database provides easy access to broadband dielectric
        properties of various materials.
      </p>

      <div className="search">
        <input type="text" placeholder="Search for a material..." />
        <button>Search</button>
      </div>

      <section className="results">
        <h2>
          Fe₂O₃ <span>|</span> Room Temp.
        </h2>
        <table>
          <thead>
            <tr>
              <th>Freq. (MHz)</th>
              <th>ε'</th>
              <th>ε''</th>
              <th>tan δ</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>3.96E+02</td><td>-4.9240</td><td>0.0002</td><td>-5.07289E-05</td></tr>
            <tr><td>9.12E+02</td><td>15.2730</td><td>0.5973</td><td>0.03910861</td></tr>
            <tr><td>1.43E+03</td><td>4.4275</td><td>0.0450</td><td>0.010160034</td></tr>
            <tr><td>1.95E+03</td><td>4.8649</td><td>0.0573</td><td>0.011771662</td></tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
