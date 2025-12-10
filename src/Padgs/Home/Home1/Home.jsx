
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="hero-content">
                <div className="hero-icon mb-4">
                  <i className="bi bi-code-square"></i>
                </div>
                <h1 className="hero-title">Start Framework</h1>
                <p className="hero-tagline">
                  <span className="badge-custom">
                    <i className="bi bi-palette-fill"></i> Graphic Artist
                  </span>
                  <span className="badge-custom">
                    <i className="bi bi-laptop"></i> Web Designer
                  </span>
                  <span className="badge-custom">
                    <i className="bi bi-pencil-fill"></i> Illustrator
                  </span>
                </p>
                <p className="hero-description">
                  I create stunning digital experiences with clean code and
                  beautiful design. Specialized in modern web development and
                  creative design.
                </p>
                
              </div>
            </div>

            
            <div className="col-lg-6 col-md-12 text-center">
              <div className="hero-image-wrapper">
                <div className="floating-shape"></div>
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
                  alt="Profile"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
