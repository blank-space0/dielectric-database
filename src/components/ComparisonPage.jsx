import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

export default function ComparisonPage() {
  const chartRef = useRef(null);

  const xGHz = [0, 10, 20, 30, 40, 50, 60, 70];

  const data = [
    {
      name: "Alumina (ε′)",
      x: xGHz,
      // Sharper drop: ~10 down to ~2
      y: [10.0, 8.5, 7.0, 5.5, 4.0, 3.2, 2.5, 2.0],
      mode: "lines+markers",
      type: "scatter",
      line: { shape: "spline", smoothing: 1.2, width: 2 },
      marker: { size: 6 },
    },
    {
      name: "Bismuth (ε′)",
      x: xGHz,
      // Even higher start, down to ~3
      y: [14.0, 12.0, 9.5, 7.0, 5.0, 4.0, 3.5, 3.0],
      mode: "lines+markers",
      type: "scatter",
      line: { shape: "spline", smoothing: 1.2, width: 2 },
      marker: { size: 6 },
    },
  ];

  const layout = {
    title: "Relative Permittivity vs Frequency",
    xaxis: {
      title: { text: "Frequency (GHz)" },
      range: [0, 70],
      dtick: 10,
      zeroline: true,
      showline: true,
    },
    yaxis: {
      title: { text: "Relative Permittivity (ε′)" },
      side: "left",          // axis on LEFT
      rangemode: "tozero",
      showline: true,
      ticks: "outside",
    },
    legend: {
      orientation: "h",
      x: 0,
      y: -0.25,
    },
    margin: { l: 85, r: 40, t: 40, b: 100 }, // extra left margin for y-axis
  };

  const config = {
    responsive: true,
    displaylogo: false,
    toImageButtonOptions: {
      format: "png",
      filename: "dielectric-permittivity-chart",
      height: 600,
      width: 1000,
      scale: 2,
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      Plotly.newPlot(chartRef.current, data, layout, config);
    }
  }, []);

  const handleExport = async () => {
    if (!chartRef.current) return;
    const url = await Plotly.toImage(chartRef.current, {
      format: "png",
      height: 600,
      width: 1000,
      scale: 2,
    });
    const a = document.createElement("a");
    a.href = url;
    a.download = "dielectric-permittivity-chart.png";
    a.click();
  };

  return (
    <main className="main">
      <section className="chart-card">
        <div className="chart-placeholder">
          <div ref={chartRef} style={{ width: "100%", height: 460 }} />
        </div>
        <button className="export-btn" onClick={handleExport}>
          Export
        </button>
      </section>

      {/* Table with only Alumina and Bismuth */}
      <section className="results">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Chemical Formula</th>
              <th>Freq. Range</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alumina</td>
              <td><em>Al₂O₃</em></td>
              <td>0 – 70 GHz</td>
              <td><button className="full-table">Full table</button></td>
            </tr>
            <tr>
              <td>Bismuth</td>
              <td><strong>Bi</strong></td>
              <td>0 – 70 GHz</td>
              <td><button className="full-table">Full table</button></td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
