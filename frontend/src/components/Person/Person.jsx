import { PersonSection } from "./Styles";
import { AiOutlineInstagram } from "react-icons/ai"
import Dudu from "../../assets/dudu.jpg"
import Lucas from "../../assets/Lucas.png"

export default function Person() {
  return (
    <PersonSection>
      <div className="title">PROFESSIONAL TEAM</div>
      <div className="person-grid">
        <div className="person-card">
          <img src={Dudu} />
          <h3>Carlos Eduardo</h3>
          <p>Ceo Founder</p>
          <div className="person-social">
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
          </div>
        </div>
        <div className="person-card">
          <img src={Lucas} />
          <h3>Lucas Alexsandro</h3>
          <p>Ceo Founder</p>
          <div className="person-social">
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
            <a href="#"><i><AiOutlineInstagram /></i></a>
          </div>
        </div>
      </div>
      <div className="person-join-team">
        <button>Entre no nosso time</button>
      </div>
    </PersonSection>
  );
}
