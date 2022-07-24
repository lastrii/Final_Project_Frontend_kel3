import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import BtnLgPurple from '../../components/ButtonLarge';
import NavbarPlain from '../../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
// import Button from '@mui/material/Button';
// import upfoto from '../assets/img/upfoto.svg';
import axios from 'axios';

function InfoProfilPage() {
	const [username, setUsername] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [phone, setPhone] = useState('');
	// const [image, setImage] = useState();
	const [file, setFile] = useState();
	const [fileUrl, setFileUrl] = useState('');
	const fileInputRef = useRef();

	const handleGambar = (e) => {
		e.preventDefault();
		const file = e.target.files[0];
		setFile(e.target.files[0]);

		const reader = new FileReader();
		reader.onloadend = () => {
			console.log(reader.result);
			setFileUrl(reader.result);
		};
		reader.readAsDataURL(file);
	};

	const handleUserName = (event) => {
		setUsername(event.target.value);
	};

	const handleAddress = (event) => {
		setAddress(event.target.value);
	};

	const handlePhone = (event) => {
		setPhone(event.target.value);
	};

	const handleCity = (event) => {
		setCity(event.target.value);
	};

	const url = 'https://backendprojectt.herokuapp.com';

	let token = localStorage.getItem('token');

	const updateProfile = async (event) => {
		event.preventDefault();
		const formData = new FormData();

		formData.append('image', file);
		formData.append('username', username);
		formData.append('phone', phone);
		formData.append('address', address);
		formData.append('city', city);
		console.log(...formData);
		try {
			// axios.defaults.headers['Authorization'] = `Bearer ${ token }`
			await axios
				.put(`${url}/api/user/data`, formData, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					console.log(response.data);
					alert('update berhasil');
				});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<NavbarPlain judulPage="Lengkapi Info Akun" />
			<br></br> <br></br>
			<div className="container mt-4">
				<a className="iconArrowLeft" href="/loggedIn">
					<ArrowLeft size={34}/>
				</a>
				<div className="row">
					<div className="col-6 col-sm-12 col-md-8 offset-lg-2 offset-md-2">
						<Form>
							{/* <Form.Group className="mb-3 mt-4 m-auto" id="formBasicProfilePhoto"> */}
							{/* <div className="text-center">
									<Form.Control type="file" accept="image/*" style={{ display: 'none' }} id="contained-button-file" value={image} onChange={(event) => setImage(event.target.value)} />
									<label className="" htmlFor="contained-button-file">
										<img src={upfoto} alt="upfoto" style={{ position: 'relative' }}></img>
										{/* <Button className="" component="span">
										</Button> 
									</label>*/}
							{/* <Form.Label>Photo Profile</Form.Label> 
								<Form.Control type="file" id="Name" placeholder="Photo Profile" className="formRounded" value={image} onChange={(event) => setImage(event.target.value)} required />
							  </Form.Group> */}
							{file !== undefined ? (
								<>
									<div className="border-radius-13px d-flex flex-column align-items-center" style={{}}>
										<img src={fileUrl} alt="" className="profil_picture" />
										<button style={{ border: 'none', borderRadius: '12px' }} onClick={() => fileInputRef.current.click()}>
											Ganti Gambar
										</button>
										<input accept="image/*" type="file" style={{ display: 'none' }} name="upload_gambar" onChange={(e) => handleGambar(e)} ref={fileInputRef} />
									</div>
								</>
							) : (
								<div className="d-flex flex-column align-items-center">
									<div className="square mx-auto border-radius-13px  d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E2D4F0' }}>
										{/* <img src={fi_camera} alt="" className=''/> */}
									</div>
									<input accept="image/*" type="file" name="upload_gambar" onChange={(e) => handleGambar(e)} />
								</div>
							)}
							<Form.Group className="mb-3 mt-4" id="formBasicName">
								<Form.Label>Nama</Form.Label>
								<Form.Control type="text" id="Name" placeholder="Nama" className="formRounded" value={username} onChange={(e) => handleUserName(e)} required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicHP">
								<Form.Label>Nomer Handphone</Form.Label>
								<Form.Control type="number" id="noHP" placeholder="Masukan no HP" className="formRounded" value={phone} onChange={(e) => handlePhone(e)} required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicAddress">
								<Form.Label>Alamat</Form.Label>
								<Form.Control type="text" id="alamat" placeholder="Masukan alamat" className="formRounded inputLarge" value={address} onChange={(e) => handleAddress(e)} required />
							</Form.Group>

							<Form.Group className="mb-3" id="formBasicCity">
								<Form.Label>Kota</Form.Label>
								<Form.Control type="text" id="kota" placeholder="Masukkan kota" className="formRounded" value={city} onChange={(e) => handleCity(e)} required />
							</Form.Group>
							<div className="mb-5">
								<BtnLgPurple namaButton="Simpan" type="submit" value="submit" onClick={updateProfile} />
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoProfilPage;
