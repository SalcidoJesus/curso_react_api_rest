
import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";


export default function BaseLayout() {
	return (
		<div>
			<h3>CRUD React + PHP</h3>
			<NavMenu />

			<Outlet />
		</div>
	)
}

