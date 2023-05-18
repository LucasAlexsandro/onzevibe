import styled from 'styled-components';
import BgStars from '../../assets/stars-bg.png';

export const StepsContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgStars});
  background-size: cover;
`;
