import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Title } from "../Services/style";
import { Container } from "../../pages/Home/style";
import { slider } from "../../data/Carousel.data";
import * as P from "./Styles";

export default function Portfolio() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
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
                initial={{x: 100}}
                animate={{x: 0}}
                transition={{duration: 0.8}}
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
