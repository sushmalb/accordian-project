import "./Accordian.css";
import Accordian from "./Accordian";

const AccordianItem = ({ question, answer, i, curItem, onOpen }) => {
  const isTrue = i === curItem;
  function handleClick() {
    onOpen(i);
  }

  return (
    <div className={`accordian-item ${isTrue ? "expanded" : ""}`}>
      <div className="accordian-header" onClick={handleClick}>
        <p className="accordian-index">{i + 1}</p>
        <p className="accordian-question">{question}</p>
        <button className="accordian-toggle">{isTrue ? "-" : "+"}</button>
      </div>
      {isTrue && <p className="accordian-answer">{answer}</p>}
    </div>
  );
};

export default AccordianItem;
