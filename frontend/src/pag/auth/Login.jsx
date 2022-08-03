import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import './auth.css';
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const Login = () => {
	const { setToken } = useContext(AuthContext);

	const [formData, setFormData] = useState({
		email: '', contra: ''
	});

	async function botonInput(e) {
		e.preventDefault();

		try {
			const rta = await axios.post('http://localhost:4000/api/usuarios/iniciarsesion', {
				email: formData.email,
				contra: formData.contra
			});
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
						<form className="login_wrapper" onSubmit={botonInput}>
              				<h3 className='mb-4 h5'>Inicar sesión</h3>
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
								<p>Aún no tienes cuenta <Link to="/registrarme">Registrate</Link> </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Login;