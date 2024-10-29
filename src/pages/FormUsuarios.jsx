
import useFormUsuarios from "../hooks/useFormUsuarios"


export default function FormUsuarios() {

	document.title = 'Registrar usuario'
	const { dataUsuarios, setDataUsuarios, guardarUsuario, cargando } = useFormUsuarios()

	return (
		<div>

			<h2>Registro de Usuario</h2>

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

				<button type="submit" disabled={ cargando }>
					{ cargando ? 'Guardando...' : 'Guardar' }
				</button>
			</form>


			{/* <pre>
				{ JSON.stringify(dataUsuarios, null, 4) }
			</pre> */}

		</div>
	)
}

