const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item">
        <a className="nav-link" href="/" title="Link to home page">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#about" title="Link to about page">
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="/booking"
          title="Link to reservations page"
        >
          Reservations
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="/order-online"
          title="Link to order online page"
        >
          Order online
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login" title="Link to login page">
          Login
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
