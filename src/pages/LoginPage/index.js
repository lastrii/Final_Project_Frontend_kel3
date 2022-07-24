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

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [msg, setMsg] = useState('');
	const navigate = useNavigate();

	const login = async (event) => {
		console.log(login);
		event.preventDefault();
		try {
			await axios
				.post('https://backendprojectt.herokuapp.com/api/user/login', {
					email: email,
					password: password,
				})
				.then((response) => {
          console.log(response);
          localStorage.setItem('token',response.data.accessToken)
				});
			navigate('/loggedIn');
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	return (
		<>
			<Container fluid>
				<Row>
					<Col md={6}>
						<div id="overlay">
							<img src={SecondHand} alt="" id="secondHand" />
							<img src={coverSecondHand} alt="" id="imgRegister" />
						</div>
					</Col>

					<Col md={6} className="mt-lg-5">
						<Container className="loginText">
							<h3 className="mb-lg-4">
								<b>Masuk</b>
							</h3>
							<span style={{ color: 'red' }}>{msg}</span>
							<Form onSubmit={login}>
								<Form.Group className="mb-3 mt-4">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" id="email" placeholder="Contoh: johndee@gmail.com" className="formRounded" value={email} onChange={(event) => setEmail(event.target.value)} required />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" id="password" placeholder="Masukan password" className="formRounded" onChange={(event) => setPassword(event.target.value)} required />
								</Form.Group>
								<ButtonLargePurple namaButton="Masuk" type="submit" value="submit" linkHref="" />
								<p className="mt-2 pt-4 mb-0 txtRegister">
									Belum punya akun?
									<a href="/register" className="btnLinkPurp fw-bold">
										{' '}
										Daftar di sini
									</a>
								</p>
							</Form>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default LoginPage;

// <buttonLargePurple namaButton="Test"/>
