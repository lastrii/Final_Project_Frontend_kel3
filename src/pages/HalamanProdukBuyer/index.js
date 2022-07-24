import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
// import imgProduct from '../assets/img/product.png';
import imgSeller from '../../assets/images/seller.png';
import NavbarLogin from '../../components/NavbarLogin';
import ButtonLargePurple from '../../components/ButtonLarge';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
  const [bidPrice, setBidPrice] = useState({});

	const url = 'https://backendprojectt.herokuapp.com';

	const token = localStorage.getItem('token');
	console.log(token);
	const query = new URLSearchParams(useLocation().search);
	const id = query.get('id');

	// useEffect (() => {
	// 	const getTransaction = async () => {
	// 		try {
	// 			const response = await axios.post(`${url}/api/transaction/add-transaction/${id}`, {
	// 				headers: {'Authorization': `Bearer ${token}`, 'Content-Type' : 'application/x-www-form-urlencoded' },
	// 			});

	// 			console.log(response);
	// 			const getPenawaran = response.data;
	// 			setPenawaran(getPenawaran);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	getTransaction();
	// 	}, []);

	const penawaran = async (event) => {
		event.preventDefault();
		const formData = new FormData();

		formData.append('bidPrice', bidPrice);
		console.log(...formData);
		try {
			// axios.defaults.headers['Authorization'] = `Bearer ${ token }`
			await axios
				.post(`${url}/api/transaction/add-transaction/${id}`, formData, {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/x-www-form-urlencoded',
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
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<h5 className="fw-bold">Masukan Harga tawarmu</h5>
				<p className="text-muted">Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
				{/* modal product */}
				<div
					style={{
						background: '#EEEEEE',
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
						borderRadius: '16px',
					}}
					className=""
				>
					<div className="cardproduct p-4 mt-4">
						<div className="d-flex flex-row align-items-center">
							<div className="">
								<img className="img-penawar rounded-4 col-3" src={imgSeller} alt="" />
							</div>
							<div className="ms-3">
								<div className="row-col">
									<div className="fw-bold">Nama Penjual</div>
									<div className="city-penawar">Kota</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pt-4">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Harga Tawar</Form.Label>
							<Form.Control className="ModalKotakTawar" type="text" placeholder="Rp 0,00" onChange={(event) => setBidPrice(event.target.value)} />
						</Form.Group>
						<ButtonLargePurple namaButton="Kirim" type="submit" onClick={penawaran} />
					</Form>
				</div>
			</Modal.Body>
		</Modal>
	);
}

function SellHalamanProduk() {
	const [modalShow, setModalShow] = React.useState(false);

  	
	const [item, setItem] = useState({});

	const url = 'http://localhost:8000';
	const query = new URLSearchParams(useLocation().search);
	const id = query.get('id');

	const token = localStorage.getItem('token');

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(`${url}/api/product/detail/${id}`, {
					headers: { Authorization: `Bearer ${token}` },
				});
				console.log(response);
				const getItem = response.data.data;
				setItem(getItem);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, []);
  
	return (
		<>
			{/* NAVBAR */}
			<NavbarLogin />

			{/* PRODUCT */}
			<Container>
				<div className="row mt-4">
					<div className="col-lg-8">
						<Carousel>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image} alt="First slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image} alt="Second slide" />
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={item.image} alt="Second slide" />
							</Carousel.Item>
						</Carousel>
					</div>
					{/* COL KE 2 */}
					<div className="col-lg-4">
						<div className="textShadowBox p-4">
							<h4>{item.name}</h4>
							<h6 className="text-muted">kategori</h6>
							<h5>
								{new Intl.NumberFormat('id-ID', {
									style: 'currency',
									currency: 'idr',
								}).format(item.price)}
							</h5>

							<div className="mt-4">
								<ButtonLargePurple namaButton="Saya tertarik dan ingin nego" onClick={() => setModalShow(true)} />
							</div>

							<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<div className="cardproduct textShadowBox p-4 mt-4">
							<div className="d-flex flex-row align-items-center">
								<div className="">
									<img className="img-penawar rounded-4 col-3" src={imgSeller} alt="" />
								</div>
								<div className="ms-3">
									<div className="row-col">
										<div className="fw-bold">Nama Penjual</div>
										<div className="city-penawar">Kota</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* TEXT DESCRIPSI */}
				<div className="row">
					<div className="col-lg-8">
						<div className="textShadowBox p-4 mt-4 mb-4">
							<h5 className="fw-bold">Deskripsi</h5>
							<div className="text-muted mt-4" align="justify">
								{item.description}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default SellHalamanProduk;
