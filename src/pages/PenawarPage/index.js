import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavbarPlain from '../../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
import CardPenawar from '../../components/CardPenawar';
import CardTawaran from '../../components/CardTawaran';
import imgPenawar from '../../assets/images/img-penawar.png';
import imgProduct from '../../assets/images/product.png';

function PenawarPage() {
	return (
		<>
			<NavbarPlain judulPage="Info Penawar" />

			<div className="container mt-4">
				<a className="iconArrowLeft" href="/">
					<ArrowLeft size={34} />
				</a>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<CardPenawar imgPenawar={imgPenawar} nameBuyer="Nama Buyer" cityBuyer="Kota Surabaya" />
						<p className="fw-bold mt-5 mb-4">Daftar Produkmu yang ditawar</p>
						<CardTawaran nameProduct="Jam Tangan Casio" priceProduct="Rp. 250.000" priceTawaran="Rp. 200.000" time="20 Apr, 14:04" imgProduct={imgProduct} nameBuyer="Nama Buyer" />
					</div>
				</div>
			</div>
		</>
	);
}

export default PenawarPage;
