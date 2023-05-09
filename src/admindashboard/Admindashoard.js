import React, { useState } from "react";
import admn from './AdminDashboard.module.css'
import { useNavigate } from 'react-router-dom'


export default function Admindashoard() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questions,setQuestions]=useState([])
  const [adminLogout,setAdminLogout]=useState(false)

  const [isEditing, setIsEditing] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    id: null,
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const nevigate=useNavigate()

  

  function handleAdminLogin(){
    if(!adminLogout)
    setAdminLogout(true)
    nevigate('/')
}


  const handleEditQuestion = (question) => {
    setIsEditing(true);
    setCurrentQuestion(question);
    setNewQuestion(question);
  };

  const handleUpdateQuestion = () => {
    const updatedQuestions = questions.map((question) => {
      if (question.id === currentQuestion.id) {
        return newQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedQuestions);
    setCurrentQuestion(null);
    setIsEditing(false);
    setNewQuestion({
      id: null,
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    });
  };

  const handleDeleteQuestion = (id) => {
    const filteredQuestions = questions.filter((question) => question.id !== id);
    setQuestions(filteredQuestions);
  };

  const handleAddQuestion = () => {
    const newQuestions = [...questions, newQuestion];
    setQuestions(newQuestions);
    setNewQuestion({
      id: null,
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    });
  };

  return (
    <div className={admn.myadmin}>
      <h1>Dashboard</h1>
      <div>
        <h2>Questions</h2>
        {questions.map((question) => (
          <div key={question.id}>
            <p>{question.question}</p>
            <p>Option 1: {question.option1}</p>
            <p>Option 2: {question.option2}</p>
            <p>Option 3: {question.option3}</p>
            <p>Option 4: {question.option4}</p>
            <p>Answer: {question.answer}</p>
            <button onClick={() => handleEditQuestion(question)}>Edit</button>
            <button onClick={() => handleDeleteQuestion(question.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div  className={admn.question}>
        <h2>{isEditing ? "Edit Question" : "Add Question"}</h2>
        <input
          type="text"
          placeholder="Question"
          value={newQuestion.question}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Option 1"
          value={newQuestion.option1}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, option1: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Option 2"
          value={newQuestion.option2}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, option2: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Option 3"
          value={newQuestion.option3}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, option3: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Option 4"
          value={newQuestion.option4}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, option4: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Answer"
          value={newQuestion.answer}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, answer: e.target.value })
          }
        />
        {isEditing ? (
          <button onClick={handleUpdateQuestion}>Update Question</button>
        ) : (
          <button onClick={handleAddQuestion}>Add Question</button>
        )}
      <button onClick={handleAdminLogin}>admin logout</button>

      </div>
      <div className={admn.result}>
        <h2>Results</h2>
        {/* show the results of the user attempted quizzes */}
      </div>
    </div>
  );
}
