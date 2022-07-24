import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import coverSecondHand from '../../assets/images/coverSecondHand.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecondHand from '../../assets/images/SecondHand.svg';
import ButtonLargePurple from '../../components/ButtonLarge';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

function RegisterPage() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const [msg, setMsg] = useState('');
	const navigate = useNavigate();

	const register = async (event) => {
		console.log(register);
		event.preventDefault();
		try {
			await axios.post('https://backendprojectt.herokuapp.com/api/user/register', {
				username: username,
				email: email,
				password: password,
				confPassword: confPassword,
			});
			navigate('/login');
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	return (
		<div>
			<Container fluid>
				<Row>
					<Col md={6}>
						<div id="overlay">
							<img src={SecondHand} alt="" id="secondHand" />
							<img src={coverSecondHand} alt="" id="imgRegister" />
						</div>
					</Col>
					<Col md={6} className="mt-lg-5">
						<Container className="signUpText">
							<h3 className="mb-lg-4">
								<b>Daftar</b>
							</h3>
              <span style={{color: 'red'}}>{msg}</span>
							<Form onSubmit={register}>
								<Form.Group className="mb-3 mt-4">
									<Form.Label>Nama</Form.Label>
									<Form.Control type="text" id="username" placeholder="Nama" className="formRounded" value={username} onChange={(event) => setUsername(event.target.value)} required />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" id="email" placeholder="Contoh: johndee@gmail.com" className="formRounded" value={email} onChange={(event) => setEmail(event.target.value)} required />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" id="password" placeholder="Masukan password" className="formRounded" value={password} onChange={(event) => setPassword(event.target.value)} required />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label> Confirm Password</Form.Label>
									<Form.Control type="password" id="confirmPassword" placeholder="Masukan password" className="formRounded" value={confPassword} onChange={(event) => setConfPassword(event.target.value)} required />
								</Form.Group>
								<ButtonLargePurple type="submit" value="submit" namaButton="Daftar" linkHref="" />
								<p className="mt-2 pt-4 mb-0 txtRegister">
									Sudah punya akun?
									<a href="/login" className="btnLinkPurp fw-bold">
										{' '}
										Masuk di sini
									</a>
								</p>
							</Form>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default RegisterPage;
