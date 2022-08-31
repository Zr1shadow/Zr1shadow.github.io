import styles from '../styles/Nav.module.css'

function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <div className="container-fluid mx-3">
          <a className={`navbar-brand ${styles.link} ${styles.titles} ${styles.navbar}`} href="#">&#60;Raul&#62;</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center justify-content-evenly">
              <li className="nav-item">
                <a className={`nav-link ${styles.link}`} href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.link}`} href="#about-me">About Me</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.link}`} href="#testimonals">Testimonals</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles.link}`} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Nav