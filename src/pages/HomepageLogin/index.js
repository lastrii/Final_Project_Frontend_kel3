import React from 'react';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Button from 'react-bootstrap/Button';
import Category from '../../components/Category';
import ButtonJual from '../../components/ButtonJual';
// import imgProduct from '../assets/img/product.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavbarLogin from '../../components/NavbarLogin';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router';

function HomepageLogin() {
	const [product, setProduct] = useState([]);

	const url = 'https://backendprojectt.herokuapp.com';

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await axios.get(`${url}/api/product/findAll`);
				console.log(response);
				const getAllProduct = response.data.data;
				setProduct(getAllProduct);
			} catch (error) {
				console.log(error);
			}
		};
		getProduct();
	}, []);

	return (
		<div>
			<NavbarLogin />
				<Carousel />
			<Category />
			<div className="container">
				<div className="row row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 row-cols-md-2 g-3 mt-lg-2 mt-3">
					{product.map((products) => (
						<Card
							key={products.id}
							imgProduct={products.image}
							nameProduct={products.name}
							priceProduct={products.price}
							linkHref={`/buyer/product/detail?id=${products.id}`}
						/>
					))}
				</div>
			</div>
			<div className="container mt-lg-5 mb-lg-5">
				<ButtonJual type="submit" value="submit" nameButton="Jual" linkHref="/update/product" />
			</div>
		</div>
	);
}

export default HomepageLogin;
