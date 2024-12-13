import React, { useEffect, useMemo, useState } from "react";
import ReactDom from "react-dom";
import "../src/app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  const [questionnumber, setquestionnumber] = useState(1);
  const [stop, setstop] = useState(false);
  const [earned, setearned] = useState("0");

  const data = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      answers: [
        {
          text: "O(n)",
          correct: false,
        },
        {
          text: "O(log n)",
          correct: true,
        },
        {
          text: "O(n^2)",
          correct: false,
        },
        {
          text: "O(1)",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of the following is NOT a programming language?",
      answers: [
        {
          text: "Python",
          correct: false,
        },
        {
          text: "Java",
          correct: false,
        },
        {
          text: "HTML",
          correct: true,
        },
        {
          text: "C++",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      answers: [
        {
          text: "Creative Style Sheets",
          correct: false,
        },
        {
          text: "Cascading Style Sheets",
          correct: true,
        },
        {
          text: "Computer Style Syntax",
          correct: false,
        },
        {
          text: "Colorful Style Sheets",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the primary purpose of DNS in networking?",
      answers: [
        {
          text: "To block IP addresses",
          correct: false,
        },
        {
          text: "To translate domain names to IP addresses",
          correct: true,
        },
        {
          text: "To create secure connections",
          correct: false,
        },
        {
          text: "To manage email services",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which data structure uses FIFO (First In, First Out)?",
      answers: [
        {
          text: "Stack",
          correct: false,
        },
        {
          text: "Queue",
          correct: true,
        },
        {
          text: "Tree",
          correct: false,
        },
        {
          text: "Graph",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which one is a NoSQL database?",
      answers: [
        {
          text: "MySQL",
          correct: false,
        },
        {
          text: "MongoDB",
          correct: true,
        },
        {
          text: "PostgreSQL",
          correct: false,
        },
        {
          text: "Oracle",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the creator of the Python programming language?",
      answers: [
        {
          text: "Dennis Ritchie",
          correct: false,
        },
        {
          text: "Guido van Rossum",
          correct: true,
        },
        {
          text: "James Gosling",
          correct: false,
        },
        {
          text: "Brendan Eich",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which HTML tag is used to define an internal stylesheet?",
      answers: [
        {
          text: "<css>",
          correct: false,
        },
        {
          text: "<style>",
          correct: true,
        },
        {
          text: "<script>",
          correct: false,
        },
        {
          text: "<link>",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which sorting algorithm is the fastest in the average case?",
      answers: [
        {
          text: "Bubble Sort",
          correct: false,
        },
        {
          text: "Insertion Sort",
          correct: false,
        },
        {
          text: "Merge Sort",
          correct: false,
        },
        {
          text: "Quick Sort",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "What is the default port number for HTTP?",
      answers: [
        {
          text: "80",
          correct: true,
        },
        {
          text: "443",
          correct: false,
        },
        {
          text: "21",
          correct: false,
        },
        {
          text: "8080",
          correct: false,
        },
      ],
    },
  ];

  const moneypyramid = useMemo(
    () =>
      [
        { id: 1, amount: "100" },
        { id: 2, amount: "200" },
        { id: 3, amount: "400" },
        { id: 4, amount: "800" },
        { id: 5, amount: "1600" },
        { id: 6, amount: "2000" },
        { id: 7, amount: "2200" },
        { id: 8, amount: "2400" },
        { id: 9, amount: "2600" },
        { id: 10, amount: "3000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionnumber > 1) {
      setearned(moneypyramid.find((m) => m.id === questionnumber - 1).amount);
    }
  }, [questionnumber, moneypyramid]);

  const handleRestart = () => {
    setquestionnumber(1);
    setstop(false);
    setearned("0");
  };

  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <div className="end-screen">
            <h1 className="endtext">You earned: {earned}</h1>
            <button className="restart-button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setstop={setstop} questionnumber={questionnumber} />
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setstop={setstop}
                questionnumber={questionnumber}
                setquestionnumber={setquestionnumber}
                earned={earned}
                
              />
            </div>
          </>
        )}
      </div>
      <div className="money">
        <ul className="moneylist">
          {moneypyramid.map((m) => (
            <li
              className={
                questionnumber === m.id
                  ? "moneylistitem active"
                  : "moneylistitem"
              }
              key={m.id}
            >
              <span className="moneylistnumber">{m.id})</span>
              <span className="moneylistamount">{m.amount}</span>
            </li>
          ))}
        </ul>


        </div>
       
      </div>
    
  );
}

export default App;




