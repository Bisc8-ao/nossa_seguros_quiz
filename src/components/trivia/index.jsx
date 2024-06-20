import "./main.scss";
import "../../styles/media-queries/trivia-media-querie.scss"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Levels from "../levels";
import styled from "styled-components";

import { levels } from "../../data/levels";

const Timer = styled.div`
  width: 100%;
  height: 30px;
  background-color: red;
`;

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [showLevel, setShowLevel] = useState(false);

  const [className, setClassName] = useState("_tr_answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  function handleClick(answer) {
    setSelectedAnswer(answer);
    setClassName("_tr_answer active");

    delay(3000, () =>
      setClassName(
        answer.correct ? "_tr_answer _tr_correct" : "_tr_answer _tr_wrong"
      )
    );

    delay(6000, () => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowLevel(true);

        delay(2000, () => {
          setShowLevel(false);
        });
      } else {
        setSelectedAnswer(null);
        navigate("/lose");
        setStop(true);
      }
    });
  }

  return (
    <div>
      {showLevel ? (
        <Levels data={levels} questionNumber={questionNumber} />
      ) : (
        <>
          <div className="_tr_display_container">
            <span className="_tr_question">{question?.question}</span>
          </div>
          <div className="_tr_answers_container">
            {question?.answers.map((answer, index) => (
              <div
                className={selectedAnswer === answer ? className : "_tr_answer"}
                key={index}
                onClick={() => handleClick(answer)}
              >
                <p>{answer.text}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Trivia;
