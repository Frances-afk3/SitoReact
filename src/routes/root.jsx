import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark pt-0">
        <div className="container-fluid">
            <Link className="navbar-brand active" to="/Home">Home</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/Pacchetti">Aquista Pacchetti</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/Album">Album</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/Scambio">Scambio</Link>

                    </li>
                    <li className="nav-item">

                    </li>
                </ul>
                <Link className="navbar-brand nav-link active" to="/Accedi">Log In</Link>

            </div>
        </div>
    </nav>
        
        <div id="detail" className="mt-5 pt-5">
            <Outlet/>
        </div>
      </>
    );
  }
  