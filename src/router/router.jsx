
import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../layout/BaseLayout'
import ListaUsuarios from '../pages/ListaUsuarios'
import FormUsuarios from '../pages/FormUsuarios'
import EditarUsuarios from '../pages/EditarUsuario'
import NotFound from '../pages/NotFound'


const router = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		errorElement: <NotFound />,
		children: [
			{ path: '/', element: <ListaUsuarios/> },
			{ path: '/formulario', element: <FormUsuarios /> },
			{ path: '/editar/:id', element: <EditarUsuarios /> },
		]
	}
])


export default router
