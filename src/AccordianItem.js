import { useState } from "react";
import "./Accordian.css";

const AccordianItem = ({ question, answer, i }) => {
  const [isTrue, setIsTrue] = useState(false);

  function handleClick() {
    setIsTrue((prev) => !prev);
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
