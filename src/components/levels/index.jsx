import "./main.scss";
import logo from "../../assets/images/NOSSA.png";

function Levels({ questionNumber, onContinue, onQuit }) {
  return (
    <div className="_le_wrapper">
      <div className="_le_container">
        <img className="_le_nossa_logo" src={logo} alt="" />
        <p>Você chegou ao nível {questionNumber}. Deseja continuar?</p>
        <div className="_le_buttons">
          <button className="_le_button" onClick={onContinue}>Sim</button>
          <button className="_le_button" onClick={onQuit}>Não</button>
        </div>
      </div>
    </div>
  );
}

export default Levels;
