import "./main.scss";
import "../../styles/media-queries/levels-media-querie.scss";
import logo from "../../assets/images/NOSSA.png";

function Levels({ data, questionNumber }) {
  return (
    <div className="_le_wrapper">
      <div className="_le_container">
        <img src={logo} alt=""/>

        <ul className="_le_list_container">
          {data.map((item) => {
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
