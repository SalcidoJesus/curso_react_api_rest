
import { useState } from "react"
import { axiosClient } from "../functions/AxiosClient"


export default function useFormUsuarios() {


	const [dataUsuarios, setDataUsuarios] = useState({
		usuario: '',
		password: '',
		nivel: '',
		estatus: 'activo',
	})
	const [cargando, setCargando] = useState(false)


	const guardarUsuario = async (e) => {
		e.preventDefault()

		if (
			dataUsuarios.usuario.trim() === '' ||
			dataUsuarios.password.trim() === '' ||
			dataUsuarios.nivel.trim() === ''
		) {
			alert('No dejes campos vacíos')
			return
		}

		// ahora si a guardar

		setCargando(true)

		try {
			const { data } = await axiosClient.post('/api/users/', dataUsuarios)
			console.log(data);
			alert( data.message )
		} catch (error) {
			console.log(error)
			alert('Error al guardar usuario')
		} finally {
			setCargando(false)
		}

	}


	return {
		dataUsuarios,
		setDataUsuarios,
		guardarUsuario,
		cargando
	}
}

