import React from "react";
import "../Floating/style.css";
import {Link} from "react-router-dom";

const Floating = (props) => {
  return (
    <section id="floating-btn">
      <div className="center">
      <Link to="/halamaninfo">
        <button
          type="button"
          className="btn btn-primary btn-float"
          target="_blank"
        >
          <i className="fas fa-plus"></i> &nbsp; Jual
        </button>
        </Link>
      </div>
    </section>
  );
};
export default Floating;
