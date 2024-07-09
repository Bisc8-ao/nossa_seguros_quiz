import "./main.scss";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSound } from "use-sound";

import { SoundContext } from "../../context/soundContext";

import Levels from "../levels";
import styled from "styled-components";

import { levels } from "../../data/levels";

import gaming from "../../assets/sounds/gaming.mp3";
import correct from "../../assets/sounds/correct.mp3";
import wrong from "../../assets/sounds/wrong.mp3";

const Timer = styled.div`
  width: ${({ width }) => width}%;
  height: 30px;
  background-color: red;
  tansition: width 0.1s linear;
`;

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showLevel, setShowLevel] = useState(false);

  const [className, setClassName] = useState("_tr_answer");

  const [gamingSound] = useSound(gaming);
  const [correctAnswerSound] = useSound(correct);
  const [wrongAnswerSound] = useSound(wrong);
  const {playSound, setPlaySound} = useContext(SoundContext);

  const [isBlocked, setIsBlocked] = useState(false);
  
  const [timerWidth, setTimerWidth] = useState(100);
  const intervalRef = useRef(null)

  useEffect(() => {
    if (playSound) {
      gamingSound
    }
  }, [playSound])

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
    setTimerWidth(100);
  }, [data, questionNumber]);

  useEffect(() => {
    if (timerWidth > 0) {
      intervalRef.current = setInterval(() => {
        setTimerWidth((prev) => prev - 100 / 300);
      }, 100);

      return () => clearInterval(intervalRef.current);
    } else {
      setPlaySound(false)
      navigate("/lose");
      setStop(true);
    }
  }, [timerWidth, navigate, setStop]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  function handleClick(answer) {
    if (isBlocked) return;

    clearInterval(intervalRef.current);

    setIsBlocked(true);
    setSelectedAnswer(answer);
    setClassName("_tr_answer active");

    delay(3000, () =>
      setClassName(
        answer.correct ? "_tr_answer _tr_correct" : "_tr_answer _tr_wrong"
      )
    );

    delay(6000, () => {
      if (answer.correct) {
        if (questionNumber == data.length) {
          correctAnswerSound();
          navigate("/win");
          setStop(true);
          setIsBlocked(false);
        } else {
          correctAnswerSound();
          delay(3000, () => {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
            setIsBlocked(false);
          });

          // Mostrar o nível a cada mudança de nível
          if (
            (questionNumber === 4 && questionNumber < 8) ||
            (questionNumber === 8 && questionNumber < 10)
          ) {
            setShowLevel(true);
            delay(2000, () => {
              setShowLevel(false);
            });
          }
        }
      } else {
        wrongAnswerSound();
        setSelectedAnswer(null);
        navigate("/lose");
        setStop(true);
        setPlaySound(false)
      }
    });
  }

  return (
    <div>
      {showLevel ? (
        <Levels data={levels} questionNumber={questionNumber} />
      ) : (
        <>
          <Timer width={timerWidth} />
          <div className="_tr_display_container">
            <span className="_tr_question">{question?.question}</span>
          </div>
          <div className="_tr_answers_container">
            {question?.answers.map((answer, index) => (
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={selectedAnswer === answer ? className : "_tr_answer"}
                key={index}
                onClick={() => handleClick(answer)}
              >
                <p>{answer.text}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Trivia;
