import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import imgProduct from '../assets/img/product.png';
// import imgSeller from '../assets/img/seller.png';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import NavbarLogin from '../../components/NavbarLogin';
import ButtonLargePurple from "../../components/ButtonLarge";
import BtnLgSecondary from "../../components/BtnLgSecondary";
import {useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

function HalamanProdukSeller() {
	const [item, setItem] = useState({});
	
	const url = 'https://backendprojectt.herokuapp.com';
	const query = new URLSearchParams(useLocation().search);
	const id = query.get("id");
	
	const token = localStorage.getItem('token');
	

	useEffect (() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(`${url}/api/product/detail/${id}`, {
					headers: {'Authorization': `Bearer ${token}`}
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
			{/* navbar */}
			<NavbarLogin />

			{/* produk */}
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
								<img className="d-block w-100" src={item.image} alt="Third slide" />
							</Carousel.Item>
						</Carousel>
					</div>
					{/* COL KE 2 */}
					<div className="col-lg-4">
						<div className="textShadowBox p-4">
							<h4>{item.name}</h4>
							{/* <h6 className="text-muted">{item.category.name}</h6> */}
							<h5>{new Intl.NumberFormat("id-ID", {
									style: "currency",
									currency: "idr",
								}).format(item.price)}</h5>

							<div className="mt-4 mb-3">
								<ButtonLargePurple namaButton="Terbitkan" type="submit" />
							</div>
							<div>
								<BtnLgSecondary namaButton="Edit" type="submit" linkHref='/update/product' />
							</div>
						</div>
						<div className="cardproduct textShadowBox p-4 mt-4">
							<div className="d-flex flex-row align-items-center">
								<div className="">
									{/* <img className="img-penawar rounded-4 col-3" src={item.user.image} alt="" /> */}
								</div>
								<div className="ms-3">
									<div className="row-col">
										{/* <div className="fw-bold"> {item.user.username}</div>
										<div className="city-penawar">{item.user.city}</div> */}
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

export default HalamanProdukSeller;