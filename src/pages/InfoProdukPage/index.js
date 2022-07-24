import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import BtnMdPurple from '../../components/ButtonMedium';
import BtnMdSecondary from '../../components/BtnMdSecondary';
import NavbarPlain from '../../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
// import Button from '@mui/material/Button';
// import up3 from '../assets/img/up3.svg';
import { useRef, useState } from 'react';
import axios from 'axios';

function InfoProdukPage() {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
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

	const handleName = (event) => {
		setName(event.target.value);
	};

	const handlePrice = (event) => {
		setPrice(event.target.value);
	};

	const handleDescription = (event) => {
		setDescription(event.target.value);
	};

	const handleCategory = (event) => {
		setCategory(event.target.value);
	};

	const url = 'https://backendprojectt.herokuapp.com';

	let token = localStorage.getItem('token');

	const addProduct = async (event) => {
		event.preventDefault();
		const formData = new FormData();

		formData.append('name', name);
		formData.append('price', price);
		formData.append('categoryId', category);
		formData.append('description', description);
		formData.append('image', file);
		console.log(...formData);
		try {
			// axios.defaults.headers['Authorization'] = `Bearer ${ token }`
			await axios
				.post(`${url}/api/product/create`, formData, {
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
			<NavbarPlain judulPage="Lengkapi Info Produk" />
      <br></br> <br></br>
			<div className="container mt-4">
				<a className="iconArrowLeft" href="/loggedIn">
					<ArrowLeft size={34}/>
				</a>
				<div className="row">
					<div className="col-12 col-sm-12 col-md-8 offset-lg-2 offset-md-2">
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Nama Produk</Form.Label>
								<Form.Control type="text" id="namaProduk" placeholder="Nama Produk" className="formRounded" onChange={(e) => handleName(e)} required />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Harga Produk</Form.Label>
								<Form.Control type="text" id="hargaProduk" placeholder="Rp 0.000" className="formRounded" onChange={(e) => handlePrice(e)} required />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Kategori</Form.Label>
								<Form.Control type="text" id="kategoriProduk" placeholder="Pilih Kategori" className="formRounded" onChange={(e) => handleCategory(e)} required />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Deskripsi</Form.Label>
								<Form.Control type="text" id="deskripsiProduk" placeholder="Tulis deskripsi produk" onChange={(e) => handleDescription(e)} className="formRounded inputLarge" required />
							</Form.Group>

							{file !== undefined ? (
								<>
									<div className="border-radius-13px d-flex flex-column align-items-center" style={{}}>
										<img src={fileUrl} alt="" class="profil_picture" />
										<button style={{ border: 'none', borderRadius: '12px' }} onClick={() => fileInputRef.current.click()}>
											Ganti Gambar
										</button>
										<input accept="image/*" type="file" style={{ display: 'none' }} name="upload_gambar" onChange={(e) => handleGambar(e)} ref={fileInputRef} />
									</div>
								</>
							) : (
								<div className="d-flex flex-column align-items-center">
									<div className="square mx-auto border-radius-13px d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E2D4F0' }}>
										{/* <img src={fi_camera} alt="" class=''/> */}
									</div>
									<input className="mb-4" accept="image/*" type="file" name="upload_gambar" onChange={(e) => handleGambar(e)} />
								</div>
							)}
							{/* <Form.Group className="mb-3" controlId="formBasicProductPhoto">
								<Form.Label>Foto Produk</Form.Label>
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
									}}
								>
									<input
										type="file"
										accept="image/*"
										style={{ display: 'none' }}
										id="contained-button-file"
										// onChange={this.imageHandler}
										// name="image-upload"
									/>
									<label htmlFor="contained-button-file">
										<Button className="upfotoo" component="span">
											<img src={up3} alt="upfoto" style={{ position: 'relative'}}></img>
										</Button>
									</label>
								</div>
							</Form.Group> */}

							<div className="mb-5">
								<BtnMdSecondary namaButton="Preview" />
								<BtnMdPurple namaButton="Terbitkan" onClick={addProduct} />
							</div>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
}

export default InfoProdukPage;