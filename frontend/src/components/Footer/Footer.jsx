import React from "react";
import * as F from "./style";
import { Container } from "../../pages/Home/style";
import Logo from "../../assets/LOGO.png";

export default function Footer() {
  return (
    <>
      <F.FooterContainer>
        <Container>
          <F.FooterArea>
            <div class="footer-grid">
              <div class="footer-card">
                <img src={Logo} />
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Links</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Politicas</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Links</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
            </div>
          </F.FooterArea>
        </Container>
      </F.FooterContainer>
    </>
  );
}
