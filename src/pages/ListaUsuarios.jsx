
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import useListaUsuarios from '../hooks/useListaUsuarios'

export default function ListaUsuarios() {

	document.title = 'Listar usuarios'
	const { cargando, listaUsuarios, eliminarUsuarios } = useListaUsuarios()

	return (
		<div>

			<h3>Lista de usuarios</h3>

			{cargando && <Loading />}

			{!cargando && (
				<table border={1}>
					<thead>
						<tr>
							<th>Usuario</th>
							<th>Estatus</th>
							<th>Nivel</th>
							<th>Fecha de registro</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{listaUsuarios.map(usuario => (
							<tr key={usuario.id}>
								<td>{usuario.usuario}</td>
								<td>{usuario.estatus}</td>
								<td>{usuario.nivel}</td>
								<td>{usuario.registro}</td>
								<td>
									<button onClick={() => eliminarUsuarios(usuario.id)}>
										Eliminar
									</button>
									&nbsp;
									<Link to={`/editar/${usuario.id}`}>
										Editar
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}

		</div>
	)
}
