
import { Link } from "react-router-dom";


export default function NavMenu() {

	return (
		<ul>
			<li>
				<Link to="/">Lista de usuarios</Link>
			</li>
			<li>
				<Link to="/formulario">Formulario</Link>
			</li>
		</ul>
	)
}

