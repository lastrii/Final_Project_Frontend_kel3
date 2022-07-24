import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HalamanInfoProfil from './pages/InfoProfilPage';
import HalamanInfoProduct from './pages/InfoProdukPage';
import HalamanDaftarDiminati from './pages/HalamanDaftarDiminati';
import HalamanDaftarTerjual from './pages/HalamanDaftarTerjual';
import Home from './pages/Home';
import HomepageLogin from './pages/HomepageLogin';
import PenawarPage1 from './pages/PenawarPage1'
import PenawarPage2 from './pages/PenawarPage2'
import HalamanDaftarJual from './pages/HalamanDaftarJual';
import Notification from './pages/Notification';
import HalamanProdukSeller from './pages/HalamanProdukSeller';
import HalamanProdukBuyer from './pages/HalamanProdukBuyer';
import Akun from './pages/Akun';

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/loggedIn" element={<HomepageLogin />}></Route>
				<Route exact path="/login" element={<LoginPage />}></Route>
				<Route exact path="/register" element={<RegisterPage />}></Route>
				<Route exact path="/update/profile" element={<HalamanInfoProfil />}></Route>
				<Route exact path="/update/product" element={<HalamanInfoProduct />}></Route>
				<Route exact path="/penawaran" element={<PenawarPage1 />}></Route>
				<Route exact path="/penawaran2" element={<PenawarPage2 />}></Route>
				<Route exact path="/halamandaftarjual" element={<HalamanDaftarJual />}></Route>
				<Route exact path="/notification" element={<Notification />}></Route>
				<Route exact path="/halamandaftardiminati" element={<HalamanDaftarDiminati />}></Route>
				<Route exact path="/halamandaftarterjual" element={<HalamanDaftarTerjual />}></Route>
				<Route exact path="/product/detail" element={<HalamanProdukSeller />}></Route>
				<Route exact path="/buyer/product/detail" element={<HalamanProdukBuyer />}></Route>
				<Route exact path="/akunsaya" element={<Akun />}></Route>
			</Routes>
		</>
	);
}

export default App;
 