import React,{useState} from 'react'
import que from "./QuestionForm.module.css"


export default function QuestionForm() {
    const [questions, setQuestions] = useState([]);

    function handleAddQuestion(event) {
        event.preventDefault();
        const form = event.target;
        const question = {
          text: form.question.value,
          options: [
            form.option1.value,
            form.option2.value,
            form.option3.value,
            form.option4.value,
          ],
          answer: form.answer.value,
          image: null, // initialize to null
        };
        if (form.image.files.length > 0) {
          const reader = new FileReader();
          reader.onload = (event) => {
            question.image = event.target.result;
            setQuestions([...questions, question]);
          };
          reader.readAsDataURL(form.image.files[0]);
        } else {
          setQuestions([...questions, question]);
        }
        form.reset();
      }
    
      function handleCreateQuiz() {
        // send to store questions
      }




  return (
    <div className={que.main}>
       <form onSubmit={handleAddQuestion}>
        <label>
          Question:
          <input type="text" name="question" required />
        </label>
        <br />
        <label>
          Option 1:
          <input type="text" name="option1" required />
        </label>
        <br />
        <label>
          Option 2:
          <input type="text" name="option2" required />
        </label>
        <br />
        <label>
          Option 3:
          <input type="text" name="option3" required />
        </label>
        <br />
        <label>
          Option 4:
          <input type="text" name="option4" required />
        </label>
        <br />
        <label>
          Correct Answer:
          <select name="answer" required>
            <option value="">-- Select an option --</option>
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
            <option value="3">Option 4</option>
          </select>
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="image" accept="image/*" />
        </label>
        <br />
        <button type="submit">Add Question</button>
      </form>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.image && (
            <img src={question.image} alt={`Question ${index + 1}`} />
          )}
          <ol type="A">
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ol>
          <p>Correct Answer: {question.options[question.answer]}</p>
        </div>
      ))}
      {questions.length > 0 && (
        <button onClick={handleCreateQuiz}>Create Quiz</button>
      )}
    </div>
  )
}
