import React from 'react';
import '../../../src/App.css';
import NavbarLogin from '../../components/NavbarLogin';
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import upfoto from '../../assets/images/upfoto.svg';
import Form from 'react-bootstrap/Form';

function Akun() {
	return (
		<>
				<NavbarLogin />
			<Container fluid className="pt-5">
				<Row>
					<Col>
						<div className="titleAkun">
							<h3>
								<b>Akun Saya</b>
							</h3>
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={4}></Col>
					<Col lg={4}>
						<Form.Group className="mb-3 mt-4 m-auto" id="formBasicProfilePhoto">
							<div className="text-center">
								<input
									className=""
									type="file"
									accept="image/*"
									style={{ display: 'none' }}
									id="contained-button-file"
									// onChange={this.imageHandler}
									// name="image-upload"
								/>
								<label className="" htmlFor="contained-button-file">
									<Button className="" component="span">
										<img src={upfoto} alt="upfoto" style={{ position: 'relative' }}></img>
									</Button>
								</label>
							</div>
						</Form.Group>
						<div className="cardAkunSaya mb-5">
							<div className="mb-3">
								<a className="akunSayaMenu" href="/update/profile">
									<EditIcon /> Ubah Akun
								</a>
								<hr />
							</div>
							<div className="mb-3">
								<a className="akunSayaMenu" href="#/">
									<SettingsIcon /> Pengaturan Akun
								</a>
								<hr />
							</div>
							<div className="mb-3">
								<a className="akunSayaMenu" href="/login">
									<LogoutIcon /> Keluar
								</a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Akun;
