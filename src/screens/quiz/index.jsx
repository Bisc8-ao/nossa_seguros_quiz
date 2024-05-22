import "./main.scss";
import { useState } from "react";

import { questions } from "../../data/questions";

import Trivia from "../../components/trivia";

function Quiz() {
  const [questionNumer, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [level, setLevel] = useState(1)

  return (
    <div className="_qz_wrapper">
      <div className="_qz_container">
        <Trivia
          data={questions}
          setStop={setStop}
          questionNumer={questionNumer }
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
}

export default Quiz;
