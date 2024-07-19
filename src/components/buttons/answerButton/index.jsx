import "./main.scss";
import { motion } from "framer-motion";

function AnswerButton({ answer, handleClick, selectedAnswer, showCorrectAnswer, correctAnswer, transitionDelay = 0 }) {
  const isSelected = selectedAnswer === answer;
  const isCorrect = correctAnswer === answer;
  const buttonClassName = isSelected
    ? (isCorrect ? "_tr_answer _tr_correct" : "_tr_answer _tr_wrong")
    : (showCorrectAnswer && isCorrect ? "_tr_answer _tr_correct" : "_tr_answer");

  const handleAnswerClick = () => {
    setTimeout(() => {
      handleClick(answer);
    }, transitionDelay);
  };

  return (
    <motion.div
      whileTap={{ scale: 0.85 }}
      className={buttonClassName}
      onClick={handleAnswerClick}
    >
      <p>{answer.text}</p>
    </motion.div>
  );
}

export default AnswerButton;
