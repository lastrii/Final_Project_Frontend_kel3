import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

function Category() {
	return (
	<section id="content">
      <div className="container">
        <h6>
          <strong>Telusuri Kategori</strong>
        </h6>
        <div className="button-group">
          <button type="button" class="btn btn-primary kategori">
            <i className="fas fa-search"></i>&nbsp; Semua
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Hobi
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Kendaraan
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Baju
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Elektronik
          </button>
          <button type="button" class="btn btn-primary-non kategori">
            <i className="fas fa-search"></i>&nbsp; Kesehatan
          </button>
        </div>
      </div>
	  </section>
	);
}

export default Category;
