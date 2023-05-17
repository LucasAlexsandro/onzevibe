import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Title } from "../Services/style";
import { Container } from "../../pages/Home/style";
import { slider } from "../../data/Carousel.data";
import * as P from "./style";

export default function Portfolio() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWith - carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <P.PortfolioContainer>
        <Title>
          Nosso <span>Portfólio</span>
        </Title>
        <Container>
          <div className="portfolio-area">
            <motion.div
              ref={carousel}
              className="carousel"
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="inner"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {slider.map((item) => (
                  <motion.div className="carousel-item" key={item.id}>
                    <img src={item.image} />
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </P.PortfolioContainer>
    </>
  );
}
