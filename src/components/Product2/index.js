import React from "react";
import "../Product2/style.css";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";

const Product2 = (props) => {
  return (
    <section id="content">
      <div className="container">
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="card mt-3 mb-2 p-1">
              <a href="/halamanproduct">
                {" "}
                <img className="Image1" src={Image1} alt="..." />
              </a>
              <div className="card-body">
                <a href="/halamanproduct">
                  <h5 className="card-title">Jam Tangan Casio</h5>
                  <p className="card-text">Aksesoris</p>
                  <span className="fw-bold">Rp 250.000</span>
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
    </section>
  );
};
export default Product2;
