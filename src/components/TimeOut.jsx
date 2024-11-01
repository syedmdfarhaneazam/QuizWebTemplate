import { useState, useEffect } from "react";
export default function TimeOut({ Timeout, changeQ }) { //takes the ammount of time needed + cahnging to next questoi function

    useEffect( // using thhis useEffect so that the settime out fucniton re innitializes after state change
        () => {
            setRemainingTime(Timeout); // reset remaining tim when eever tihe time changes
            const timeOutId = setTimeout(changeQ, Timeout); // sets a  time out and excute the change of funciton
            return () => clearTimeout(timeOutId);
        }
        , [Timeout, changeQ] // this fucntion becomes new evrytime a new question comes
    );
    const [remainingTime, setRemainingTime] = useState(Timeout); // a usestate to keep track of hoow mucht time is left

    //a use Effect to not let the state change fucniton re execute 
    useEffect(() => {
        const intervalId = setInterval( // setting intervals to run the time remaining funciton
            () => {
                setRemainingTime((prevTime) => {
                    const newT = prevTime - 100;
                    return newT < 0 ? 0 : newT;
                }) // deducts 100ms every 100 ms 
            }, 100 // runns every 100 ms 
        );
        return () => clearInterval(intervalId); // clear the intervals
    }, [Timeout])

    return (
        <progress id="question-time" max={Timeout} value={remainingTime} />
    );
}