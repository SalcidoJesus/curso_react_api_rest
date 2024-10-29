
import { useEffect, useState } from "react"
import { axiosClient } from "../functions/AxiosClient"
import { useParams } from "react-router-dom"


export default function useFormEditarUsuarios() {

	const { id } = useParams()

	const [dataUsuarios, setDataUsuarios] = useState({
		id: 0,
		usuario: '',
		password: '',
		nivel: '',
		estatus: 'activo',
	})
	const [cargando, setCargando] = useState(false)
	const [guardando, setGuardando] = useState(false)


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

		setGuardando(true)

		try {
			const { data } = await axiosClient.put('/api/users/'+id, dataUsuarios)
			console.log(data);
			alert( data.message )
		} catch (error) {
			console.log(error)
			alert('Error al guardar usuario')
		} finally {
			setGuardando(false)
		}

	}


	const traerInfoUsuario = async () => {

		setCargando(true)

		try {
			const { data } = await axiosClient.get('/api/users/'+id)
			console.log(data);
			setDataUsuarios({
				id: data.id,
				usuario: data.usuario,
				password: data.password,
				nivel: data.nivel,
				estatus: data.estatus
			})
		} catch (error) {
			console.log(error)
			alert('Error al cargar la lista de usuarios')
		} finally {
			setCargando(false)
		}

	}


	useEffect(() => {
		traerInfoUsuario()
	}, [])



	return {
		dataUsuarios,
		setDataUsuarios,
		guardarUsuario,
		cargando,
		guardando
	}
}

