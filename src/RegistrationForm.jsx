import React, { useState } from 'react'
import './RegistrationForm.css'
import RegistList from './RegistList';

const RegistrationForm = () => {
	const [userinput, setUserInput] = useState({
        fname: '',
        lname: '',
        email: '',
        pass: '',
    })
	const [registArray, setRegistArray] = useState([])

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		setUserInput({
            ...userinput,
            [currentInput] : event.target.value,
        });
	};

	const submitHandler = (event) => {
		event.preventDefault()
		const registrationData = {
			...userinput,
            id: Math.random().toString()
		}
        console.log(registrationData)
        
		setRegistArray([...registArray, registrationData])
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='registration-container'>
					<label> Register</label>
					<div className='registration-container_input'>
						<input
							name='fname'
							type='text'
							placeholder='  First Name'
							onChange={inputChangeHandler}
                            
						/>
					</div>
					<div className='registration-container_input'>
						<input
							name='lname'
							type='text'
							placeholder='  Last Name'
							onChange={inputChangeHandler}
                            
						/>
					</div>
					<div className='registration-container_input'>
						<input
							name='email'
							type='email'
							placeholder='  email'
							onChange={inputChangeHandler}
                            
						/>
					</div>
					<div className='registration-container_input'>
						<input
							name='pass'
							type='password'
							placeholder='  Password'
							onChange={inputChangeHandler}
                            
						/>
					</div>
					<div className='checkbox'>
						<input type='checkbox' />
						<span>I accept</span>
						<span className='termsOfUse'>Terms of Use</span>
					</div>
					<div className='registration-action'>
						<button type='submit'>Register Now</button>
					</div>
				</div>
			</form>
			<RegistList registration = {registArray}/>
		</div>
	)
}

export default RegistrationForm
