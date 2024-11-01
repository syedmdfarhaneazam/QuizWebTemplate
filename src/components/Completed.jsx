import complete from '../assets/completed.png';
import Q from '../data/questions';
export default function Completed({ finalAns }) {
    let correct = 0;
    let unAns = 0;
    let wrong = 0;

    for (let i = 0; i < Q.length; i++) {
        if (finalAns[i] === Q[i].answers[0]) {
            correct += 1;
        } else if (finalAns[i] === null || finalAns[i] === undefined) {
            unAns += 1;
        } else {
            wrong += 1;
        }
    }

    return (
        <div id='summary'>
            <img src={complete} alt='loading the results.........' />
            <h2>RESULT...</h2>
            <ol>
                <li>
                    <h3>Correct = {correct}</h3>
                </li>
                <li>
                    <h3>Wrong = {wrong}</h3>
                </li>
                <li>
                    <h3>Un-Answered = {unAns}</h3>
                </li>
            </ol>
        </div>
    );
}