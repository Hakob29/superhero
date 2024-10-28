import React from "react";
import styles from "./Footer.module.css";
import Container from "../../UI/container/Container";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container>
      <footer className={styles.footer__div}>
        <div className={styles.footer__div_1}>
          <div className={styles.link__div}>
            <Link to="/">
              Super<span>Hero.</span>
            </Link>
            <ul>
              <li>
                <Link to="/">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ion-icon name="logo-facebook"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ion-icon name="logo-linkedin"></ion-icon>{" "}
                </Link>
              </li>
              <li>
                <Link to="/">
                  <ion-icon name="logo-twitter"></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.info__div}>
            <p>Copyright 2024 © TwentyEight10. All right reserved.</p>
          </div>
        </div>
        <div className={styles.footer__div_2}>
          <ul>
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Documentation</Link>
            </li>
            <li>
              <Link to="/">Intergretions</Link>
            </li>
            <li>
              <Link to="/">Status</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Branding</Link>
            </li>
            <li>
              <Link to="/">Customers</Link>
            </li>
            <li>
              <Link to="/">Events</Link>
            </li>
            <li>
              <Link to="/">Open Source</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Information</Link>
            </li>
            <li>
              <Link to="/">Security & Compliance</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
            <li>
              <Link to="/">Support</Link>
            </li>
            <li>
              <Link to="/">Resources</Link>
            </li>
            <li>
              <Link to="/">Tutorials</Link>
            </li>
          </ul>
        </div>
      </footer>
      ;
    </Container>
  );
};

export default Footer;
