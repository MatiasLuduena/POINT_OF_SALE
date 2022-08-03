import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import './auth.css';
import axios from "axios";

const estadoInicialForm = {
	nombre: '', email: '', contra: ''
};

const Register = () => {
	const { setToken } = useContext(AuthContext);

	const [formData, setFormData] = useState(estadoInicialForm);

	async function botonInput(e) {
		e.preventDefault();
		
		try {
			const rta = await axios.post('http://localhost:4000/api/usuarios/registrarse', {
				nombre: formData.nombre,
				email: formData.email,
				contra: formData.contra
			});
			setFormData(estadoInicialForm);

			if (rta) {
				setToken(rta.data.token);
			}
		} catch (error) {
			console.log(error.response.data);
		}
	}

  return (
    <div className="login_form_wrapper">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<div className="login_wrapper">
						<h3 className='mb-4 h5'>Registrarse</h3>
						<form className="formsix-pos" onSubmit={botonInput}>
							<div className="form-group i-email">
								<input
									type="text" 
									className="form-control" 
									required
									placeholder="Nombre de usuario *"
									value={formData.nombre}
									onChange={(e) => setFormData({
										...formData, nombre: e.target.value
									})} 
								/>
							</div>
							<div className="formsix-pos">
								<div className="form-group i-email">
									<input 
										type="email" 
										className="form-control" 
										required placeholder="correo electrónico *"
										value={formData.email}
										onChange={(e) => setFormData({
											...formData, email: e.target.value
										})}  
									/>
								</div>
							</div>
							<div className="formsix-e">
								<div className="form-group i-password">
									<input 
										type="password" 
										className="form-control" 
										required 
										placeholder="Contraseña *"
										value={formData.contra}
										onChange={(e) => setFormData({
											...formData, contra: e.target.value
										})}  
									/>
								</div>
							</div>
							<div className="login_remember_box">
								<label className="control control--checkbox">Recordar cuenta
									<input type="checkbox" />
									<span className="control__indicator"></span>
								</label>
							</div>
							<div className="login_btn_wrapper">
								<button
									type="submit"
									className="btn btn-primary login_btn"
								>Registrarme</button>
							</div>
							<div className="login_message">
								<p>¿Ya tienes cuenta?<span> </span>
									<Link to="/iniciarsesion">Inicia sesión</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Register;