import { useState, useEffect } from "react";
import "./main.scss";

function Trivia(props) {
  const { data, setTimeOut, questionNumer, setQuestionNumber } = props;

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumer - 1]);
  }, [data, questionNumer]);

  function handleClick() {

  }

  return (
    <div>
      <div className="_tr_display_container">
        <span className="_tr_question">{question?.question}</span>
      </div>
      <div className="_tr_answers_container">
        {question?.answers.map((answer, index) => (
          <div className="_tr_answer" key={index} onClick={() => handleClick(answer)}>
            <p>{answer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trivia;
