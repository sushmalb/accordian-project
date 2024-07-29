import AccordianItem from "./AccordianItem";
import "./Accordian.css";
import { useState } from "react";
const obj = [
  {
    q: "What is our national bird ?",
    ans: "Peacock",
  },
  {
    q: "What is our national animal ?",
    ans: "Tiger",
  },
  {
    q: "What is our national Anthem ?",
    ans: "Jana Gana Mana",
  },
];

const Accordian = () => {
  const [curItem, setCurItem] = useState(null);

  return (
    <div className="accordian">
      {obj.map((item, index) => (
        <AccordianItem
          key={index}
          question={item.q}
          answer={item.ans}
          i={index}
          curItem={curItem}
          onOpen={setCurItem}
        />
      ))}
    </div>
  );
};

export default Accordian;
