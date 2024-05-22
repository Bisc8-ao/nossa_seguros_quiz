import { useState, useEffect } from "react";
import styled from "styled-components";
import "./main.scss";

function Trivia(props) {
  const Timer = styled.div`
    width: 100%;
    height: 30px;
    background-color: red;
  `;

  const { data, setStop, questionNumer, setQuestionNumber } = props;

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("_tr_answer");

  useEffect(() => {
    setQuestion(data[questionNumer - 1]);
  }, [data, questionNumer]);

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
        setSelectedAnswer(null)
      } else {
        setStop(true)
      }
    });
  }

  return (
    <div>
      <Timer />
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
    </div>
  );
}

export default Trivia;
