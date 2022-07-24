import React from 'react';
import NavbarLogin from '../../components/NavbarLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BtnSmSecondary from '../../components/BtnSmSecondary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imgPenawar from '../../assets/images/img-penawar.png';
import DaftarProductMobile from '../../components/DaftarProductMobile';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ilus from '../../assets/img/illustrasiSeller.svg';
// import jam from '../assets/img/jam.svg';
// import up from '../assets/img/up.svg';
// import CardProduct from '../components/Card';
// import imgProduct from '../assets/img/product.png';
// import Alert from 'react-bootstrap/Alert';

function Minat() {
	// const [show, setShow] = useState(true);

	// if (show) {
	return (
		<>
			<NavbarLogin />
			{/* <Alert className='alert1' variant="success" onClose={() => setShow(false)} dismissible>
                  <p className='textal'>product Berhasil Diterbitkan!</p>
                </Alert> */}
			<Container fluid className="mt-5">
				{/* card penjual */}
				<Row>
					<Col md={4}>
						<div className="text2">
							<h4>
								<b>Daftar Jual Saya</b>
							</h4>
						</div>
					</Col>
				</Row>

				{/* card product */}
				<div className="container d-flex justify-content-center">
					<Card className="carddaftar">
						<Card.Body>
							<div className="cardproduct">
								<div className="d-flex flex-row align-items-center">
									<div className="">
										<img className="img-penawar rounded-4 col-3" src={imgPenawar} alt="" />
									</div>
									<div className="ms-3">
										<div className="row-col">
											<div className="fw-bold">Nama Penjual</div>
											<div className="city-penawar">Kota</div>
										</div>
									</div>
									<div className="btn3 ms-auto ">
										<BtnSmSecondary namaButton="Edit" type="button " linkHref="/update/profile" />
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>

				{/* mobile version  */}
				<div className="productdaftar">
					<Navbar navbarScroll>
						<Nav navbarScroll>
							<Nav.Link href="/halamandaftarjual">
								<DaftarProductMobile namaButton="Produk" />
							</Nav.Link>
							<Nav.Link href="/halamandaftarminat">
								<DaftarProductMobile namaButton="Minati" />
							</Nav.Link>
							<Nav.Link href="/halamandaftarterjual">
								<DaftarProductMobile namaButton="Terjual" />
							</Nav.Link>
						</Nav>
					</Navbar>
				</div>

				{/* desktop version */}
				{/* kategori */}
				<Container className="pageDaftarJual">
					<Row>
						<Col lg={3} className="">
							<Card className="cardMenuPenjual">
								<div className="kontenCardMenuPenjual">
									<p>
										<b>Kategori</b>
									</p>
									<p>
										<a href="/halamandaftarjual" className="icon2" style={{ margin: 7, padding: 7 }}>
											<ViewInArIcon />
											Semua Produk <ChevronRightIcon />{' '}
										</a>
									</p>
									<hr />
									<p>
										<a href="/halamandaftardiminati" className="icon2" style={{ margin: 7, padding: 7 }}>
											<FavoriteBorderIcon style={{ color: '#7126b5' }} /> <span style={{ color: '#7126b5' }}>Diminati</span> <ChevronRightIcon style={{ color: '#7126b5' }} />{' '}
										</a>
									</p>
									<hr />
									<p>
										<a href="/halamandaftarterjual" className="icon2" style={{ margin: 7, padding: 7 }}>
											<AttachMoneyIcon /> Terjual <ChevronRightIcon />{' '}
										</a>
									</p>
								</div>
							</Card>
						</Col>

						{/* product */}
						<Col lg={9} className="jam">
							<Row xs={2} md={3} className="g-4 Produk">
								{/* <a href="/update/product">
									<img className="foto3" src={up} alt="icon" />
								</a> 
								{Array.from({ length: 4 }).map((_, idx) => (
									<CardProduct imgProduct={imgProduct} nameProduct="Jam Tangan Casio" priceProduct="Rp. 250.000" typeProduct="Aksesoris" linkHref="/info/product" />
								))}*/}
								<div className="m-auto mt-4 w-50 row justify-content-center">
									<img src={ilus} alt="icon" />
									<p className='text-center'>
										Belum ada produkmu yang diminati nih, <br />
										sabar ya rezeki nggak kemana kok
									</p>
								</div>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
			{/* <div className="container mt-5">*/}
		</>
	);
}
// }
export default Minat;
