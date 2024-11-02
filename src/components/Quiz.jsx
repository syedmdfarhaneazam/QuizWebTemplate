//to show questions 
//switch between question 
// register the answers 
import Q from '../data/questions.js';
import TimeOut from './TimeOut.jsx';
import Completed from './Completed.jsx';
import { useState } from "react"; //importing state change
export default function Quiz() {
    //a use state to store the answers in an array 
    const [answers, setAnswers] = useState([]);
    const activeQ = answers.length; //nxt question = number of elements in answers array +1;
    //to handle selected answerws 
    function handleSelectAns(selectedAns) {
        setAnswers((prev) => {
            return [...prev, selectedAns];
        })
    }
    const isComplete = (activeQ === Q.length);
    if (isComplete) {
        return (<Completed finalAns={answers} />);
    }
    const shuffeledQ = [...Q[activeQ].answers];
    shuffeledQ.sort(() => Math.random() - 0.5);
    return (
        <div >
            <div id='question'>
                <TimeOut Timeout={10000} changeQ={() => handleSelectAns(null)} /> {/*passing null value in answer since the time rann out*/}
                <h2> {Q[activeQ].text} </h2>
                <ul id='answers'>
                    {shuffeledQ.map((ans) => (
                        (<li key={ans + activeQ} className='answer'>
                            <button onClick={() => handleSelectAns(ans)} >{ans}</button>
                        </li>)
                    ))}
                </ul>
            </div>
        </div>
    );

}