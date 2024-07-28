import AccordianItem from "./AccordianItem";
import "./Accordian.css";
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
  return (
    <div className="accordian">
      {obj.map((item, index) => (
        <AccordianItem
          key={index}
          question={item.q}
          answer={item.ans}
          i={index}
        />
      ))}
    </div>
  );
};

export default Accordian;
