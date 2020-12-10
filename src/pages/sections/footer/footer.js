import React from 'react';
import 'bootstrap';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return(
      //footer html
      <div className=" footer_container">
        <div className="container">
          <div className="col-md-4 footer-social-links text-left">
            <div>
            <ul>
              <li className=".hvr-push">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tssgndu"><span className="fa fa-facebook"></span></a>
              </li>
              <li className=".hvr-push">
                <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/gndutss"><span className="fa fa-twitter"></span></a>
              </li>
              <li className=".hvr-push">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/technicalstudentsociety"><span className="fa fa-linkedin"></span></a>
              </li>
              <li className=".hvr-push">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tss_gndu/"><span className="fa fa-instagram"></span></a>
              </li>
            </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-5 text-center">
            <div className="footer-credit">
              <span className="theme_color">TSS</span> © 2016 All Right Reserved<br />
              Designed by: <a target="_blank" rel="noopener noreferrer" href="http://codewarriors.tssgndu.com"><b>CODE WARRIORS</b></a>
            </div>
          </div>

          <div className="col-md-4 text-right footer-element">
            &nbsp;
          </div>
        </div>
      </div>
    );
  }
}
