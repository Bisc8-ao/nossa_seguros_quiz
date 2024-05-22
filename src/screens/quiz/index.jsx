import "./main.scss";
import { useState } from "react";

import { questions } from "../../data/questions";

import Trivia from "../../components/trivia";

function Quiz() {
  const [questionNumer, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  return (
    <div className="_qz_wrapper">
      <div className="_qz_container">
        <Trivia
          data={questions}
          setTimeOut={setTimeOut}
          questionNumer={questionNumer }
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
}

export default Quiz;
