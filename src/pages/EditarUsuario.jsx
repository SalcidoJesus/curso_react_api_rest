
import Loading from "../components/Loading"
import useFormEditarUsuarios from "../hooks/useFormEditarUsuario"

export default function EditarUsuarios() {

	document.title = 'Editar usuario'
	const { dataUsuarios, setDataUsuarios, guardarUsuario, cargando,
		guardando
	} = useFormEditarUsuarios()


	return (
		<div>

			<h2>Editar usuario { dataUsuarios.usuario }</h2>

			{ cargando && <Loading /> }

			<form onSubmit={ guardarUsuario } noValidate>
				<label htmlFor="usuario">Nombre de usuario:</label>
				<br/>
				<input
					type="text"
					id="usuario"
					required
					value={ dataUsuarios.usuario }
					onChange={ e => setDataUsuarios({ ...dataUsuarios, usuario: e.target.value }) }
				/>
				<br/><br/>

				<label htmlFor="password">Contraseña:</label>
				<br/>
				<input
					type="password"
					id="password"
					required
					value={ dataUsuarios.password }
					onChange={ e => setDataUsuarios({ ...dataUsuarios, password: e.target.value }) }
				/>
				<br/><br/>

				<label htmlFor="nivel">Nivel:</label>
				<br/>
				<select
					id="nivel"
					value={ dataUsuarios.nivel }
					onChange={ e => setDataUsuarios({ ...dataUsuarios, nivel: e.target.value }) }
				>
					<option value="" disabled>- Seleccione -</option>
					<option value="user">Usuario</option>
					<option value="admin">Administrador</option>
				</select>
				<br/><br/>


				<label htmlFor="estatus">Estatus:</label>
				<br/>
				<div>
					<input
						type="checkbox"
						id="estatus"
						checked={ dataUsuarios.estatus === 'activo' }
						onChange={ e => setDataUsuarios({ ...dataUsuarios, estatus: e.target.checked ? 'activo' : 'inactivo' }) }
					/>
					<label htmlFor="estatus">
						{ dataUsuarios.estatus === 'activo' ? 'Activo' : 'Inactivo' }
					</label>
				</div>
				<br/><br/>

				<button type="submit" disabled={ guardando }>
					{ guardando ? 'Guardando...' : 'Guardar' }
				</button>
			</form>


			<pre>
				{ JSON.stringify(dataUsuarios, null, 4) }
			</pre>

		</div>
	)
}

