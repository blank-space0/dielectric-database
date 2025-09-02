import logo from "../assets/netl-logo.png";

export default function Navbar({ route, setRoute }) {
  const go = (e, to) => {
    e.preventDefault();
    setRoute(to);
  };

  return (
    <header className="navbar">
      <img src={logo} alt="NETL Logo" className="logo" />
      <nav className="nav">
        <a href="#" onClick={(e) => go(e, "home")}>Home</a>
        <a href="#" onClick={(e) => go(e, "methods")}>Methods</a>
        <a href="#" onClick={(e) => go(e, "search")}>Material Search</a>
        <a href="#" onClick={(e) => go(e, "comparison")}>Comparison</a>
        <a href="#" onClick={(e) => go(e, "contact")}>Contact</a>
      </nav>
    </header>
  );
}
