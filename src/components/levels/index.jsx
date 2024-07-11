import "./main.scss";
import logo from "../../assets/images/NOSSA.png";

const LEVELS = ["Nível 1", "Nível 2", "Nível 3"];

function getGameLevel(questionNumber) {
  if (questionNumber <= 4) {
    return LEVELS[0];
  } else if (questionNumber <= 8) {
    return LEVELS[1];
  } else {
    return LEVELS[2];
  }
}

function Levels({ questionNumber, onContinue, onQuit }) {
  const gameLevel = getGameLevel(questionNumber);

  return (
    <div className="_le_wrapper">
      <div className="_le_container">
        <img className="_le_nossa_logo" src={logo} alt="Logo" />
        <p className="_le_message">Você chegou ao {gameLevel}. Deseja continuar?</p>
        <div className="_le_buttons">
          <button className="_le_button _le_button_yes" onClick={onContinue}>Sim</button>
          <button className="_le_button _le_button_no" onClick={onQuit}>Não</button>
        </div>
      </div>
    </div>
  );
}

export default Levels;
