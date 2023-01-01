import * as React from 'react';

interface NavbarProps {
  // Props for the navbar component go here
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">MCW</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fas fa-home"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-book"></i>
              <span className="nav-text">Subjects</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-upload"></i>
              <span className="nav-text">Upload</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-user"></i>
              <span className="nav-text">Profile</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
