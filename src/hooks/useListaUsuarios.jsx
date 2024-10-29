import { useEffect, useState } from "react";
import { axiosClient } from "../functions/AxiosClient"


export default function useListaUsuarios() {

	const [listaUsuarios, setListaUsuarios] = useState([])
	const [cargando, setCargando] = useState(true)


	const getListaUsuarios = async () => {

		setCargando(true)

		try {
			const { data } = await axiosClient.get('/api/users/')
			console.log(data);
			setListaUsuarios(data)
		} catch (error) {
			console.log(error)
			alert('Error al cargar la lista de usuarios')
		} finally {
			setCargando(false)
		}
	}

	const eliminarUsuarios = async (id) => {

		if ( !confirm('¿Estás seguro de eliminar este usuario?') ) return

		try {
			const { data } = await axiosClient.delete('/api/users/'+id)
			console.log(data);
			alert(data.message)
		} catch (error) {
			console.log(error)
			alert('Error al eliminar el usuario')
		} finally {

			let nuevaLista = listaUsuarios.filter( usuario => usuario.id !== id )
			setListaUsuarios(nuevaLista)

		}
	}


	useEffect(() => {
		getListaUsuarios()
	}, [])


	return {
		listaUsuarios, cargando, eliminarUsuarios

	}
}

