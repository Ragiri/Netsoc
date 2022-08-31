import React, { useState } from 'react'
import { backLink } from '../../constant/constant'

const Register = () => {
	const [name, setName] = useState(undefined)
	const [password, setPassword] = useState(undefined)
	const [email, setMail] = useState(undefined)

	const onClickRegister = () => {
		if (name && password && email) {
			fetch(`${backLink}/users`)
		}
	}

	return (
		<></>
	)
}

export default Register;