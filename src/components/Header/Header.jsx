import "../../style/header.css"
import logo from "../../assets/img/logo.png"
import { Link } from "react-router-dom"


export default function Header() {

return (
    <header className="sticky-top">
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid justify-content-center row">
                <img className="col-xs-6 col-sm-7 col-md-3 col-lg-3 ms-2" src={logo} alt="logo"/>
			    <button 
				className="navbar-toggler ms-3"
				data-bs-toggle="collapse"
				data-bs-target="#links"
			    >
				    <span className="navbar-toggler-icon" />
			    </button>
			    <div className="mt-2 col-xs-8 col-sm-8 col-md-5 col-lg-5 collapse navbar-collapse justify-content-center" id="links">
				    <ul className="navbar-nav text-center">
					    <Link to="/" className="navbar-item ms-3 Link">
						INICIO
					    </Link>
					    <Link to="/tienda" className="navbar-item ms-3 Link">
						TIENDA
					    </Link>
					    <Link to="/noticias" className="navbar-item ms-3 Link">
						NOTICIAS
					    </Link>
                        <Link to="/acercade" className="navbar-item ms-3 Link">
						ACERCA DE
					    </Link>
				    </ul>
			    </div>
				<div className="col-xs-8 col-sm-12 col-md-3 col-lg-3 mt-2 move">
				    <input type="search" className="form-control ms-2" placeholder="Buscar..."/>
					<i className="bi bi-search lupa mt-2 ml-3"/>
                </div>
				<div className="d-flex col-xs-8 col-sm-12 col-md-1 col-lg-1 justify-content-center ms-2">
					<Link to="/carrito" className="navbar-item ms-3 Link">
						<i className="bi bi-cart3 text-white ms-3" style={{fontSize:"30px"}}/>
					</Link>
			    </div>
			</div>
        </nav>
    </header>
    )
}
