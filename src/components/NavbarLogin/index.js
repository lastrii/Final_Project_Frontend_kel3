import React from "react";
import LogoNavbar from "../../assets/images/logo2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import PersonIcon from '@mui/icons-material/Person';
import person from "../../assets/images/fi_user.png";
import notif from "../../assets/images/fi_bell.png";
import imgProduct from "../../assets/images/product.png";

const NavbarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          &nbsp;
        </a>
        <form class="search-bar d-flex">
          <input
            className="form-control cari-produk"
            type="search"
            placeholder="Cari di sini ..."
            aria-label="Search"
          />
        </form>
        <Navbar.Toggle
          type="button"
          data-bs-toggle="offcanvas"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse
          className="offcanvas offcanvas-end justify-content-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-body productnavbar">
            <Nav.Link href="/halamandaftarjual">
              <a
                href="/halamandaftarjual"
                className="Icon"
                style={{ margin: 7, padding: 7 }}
              >
                <FormatListBulletedIcon className="icon-navbar" />{" "}
              </a>
              <p className="Text1">Daftar Jual</p>
            </Nav.Link>

            <Nav.Link href="/Notification">
              <p className="Text1">Notifikasi</p>
            </Nav.Link>
            <a href="#/" className="Icon" style={{ margin: 7, padding: 7 }}>
              <NavDropdown
                title={<img src={notif} alt="icon" />}
                id="basic-nav-dropdown"
                className="d-none d-lg-block icon-navbar"
              >
                <NavDropdown.Item href="#/" className="navbar-notif p-2">
                  <Container>
                    <Row>
                      <Col md="auto">
                        <img
                          src={imgProduct}
                          className="img-tawaran"
                          alt="produk"
                        ></img>
                      </Col>
                      <Col md={6}>
                        <h6 className="Cardhaha">Penawaran Produk</h6>
                        <h6>Jam tangan Casio</h6>
                        <h6>Rp 250.000</h6>
                        <h6>Ditawar Rp 200.000</h6>
                      </Col>
                      <Col md={2}>
                        <h6 className="Cardhaha">20 apr, 14:04</h6>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown.Item>
                <hr width="100%" className="mt-2 mb-2" />
                <NavDropdown.Item href="#/" className="navbar-notif p-2 m-0">
                  <Container>
                    <Row>
                      <Col md="auto">
                        <img
                          src={imgProduct}
                          className="img-tawaran"
                          alt="produk"
                        ></img>
                      </Col>
                      <Col md={6}>
                        <h6 className="Cardhaha">Penawaran Produk</h6>
                        <h6>Jam tangan Casio</h6>
                        <h6>Rp 250.000</h6>
                        <h6>Ditawar Rp 200.000</h6>
                      </Col>
                      <Col md={2}>
                        <h6 className="Cardhaha">20 apr, 14:04</h6>
                      </Col>
                    </Row>
                  </Container>
                </NavDropdown.Item>
              </NavDropdown>
            </a>
            <Nav.Link href="/akunsaya">
              <img
                src={person}
                className="icon-navbar Icon"
                style={{ margin: 7, padding: 7 }}
                alt="personIcon"
              />
              <p className="Text1">Akun</p>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </div>
    </nav>
  );
};
export default NavbarLogin;
