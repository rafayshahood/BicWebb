import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTopBar = () => {
  return (
    <div className="header-top second-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 d-flex justify-content-between" >
            <div className="header-social d-none d-lg-block" style={{ paddingTop: '10px' }}>
              <span>Follow us: </span>
              <Link to="#" title="Facebook">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#" title="Instagram">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="#" title="Twitter">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="#" title="YouTube">
                <i className="fab fa-youtube" />
              </Link>
            </div>
            <div className="header-cta">
              <ul>
                <li>
                  <div className="call-box">
                    <div className="icon">
                      <img src="assets/img/icon/phone-call.png" alt="phone call" />
                    </div>
                    <div className="text">
                      <span>Call Now!</span>
                      <strong>
                        <Link to="tel:03111111242">UAN: 0311-111-1242</Link>
                      </strong>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="call-box">
                    <div className="icon">
                      <img src="assets/img/icon/mailing.png" alt="mailing" />
                    </div>
                    <div className="text">
                      <span>Email Now</span>
                      <strong>
                        <Link to="mailto:info@example.com"> info@bic.edu.pk</Link>
                      </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
