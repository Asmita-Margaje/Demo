import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="cotainer">
        <div className="row">
          <div className="col">
            <h4>THICC MEMES INC</h4>
            <ul className="list-unstyled">
              <li>342-429-8989</li>
              <li>Moscow,Russia</li>
              <li>123 Strret South North</li>
            </ul>
          </div>
          <div className="col">
            <h4>THICC MEMES INC</h4>
            <ul className="list-unstyled">
              <li>342-429-8989</li>
              <li>Moscow,Russia</li>
              <li>123 Strret South North</li>
            </ul>
          </div>
          <div className="col">
            <h4>THICC MEMES INC</h4>
            <ul className="list-unstyled">
              <li>342-429-8989</li>
              <li>Moscow,Russia</li>
              <li>123 Strret South North</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="=col-sm">
            &copy;{new Date().getFullYear()}THICC MEMES INC | All right reserved
            | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
