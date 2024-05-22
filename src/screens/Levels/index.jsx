import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/NOSSA.png";
import "./main.scss";

import { levels } from "../../data/levels";

function Levels() {
  const dataset = levels().reverse();

  const [questionNumber, setQuestionNumber] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="_le_wrapper">
      <div className="_le_container">
        <img src={logo} alt="" width="300" />

        <ul className="_le_list_container">
          {dataset.map((item) => {
            return (
              <li
                className={
                  questionNumber === item.id
                    ? "_le_item_list active"
                    : "_le_item_list"
                }
                key={item.id}
              >
                {item.level}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Levels;
