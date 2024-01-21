import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

function PomodoroTimer() {
    const workDuration = 25; // 25 minutes for work
    const breakDuration = 5; // 5 minutes for break
    const [minutes, setMinutes] = useState(workDuration);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isWorkSession, setIsWorkSession] = useState(true);
    const [completedPomodoros, setCompletedPomodoros] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(seconds => {
                    if (seconds === 0) {
                        if (minutes === 0) {
                            // Switch between work and break sessions
                            setIsWorkSession(!isWorkSession);
                            setMinutes(isWorkSession ? breakDuration : workDuration);

                            // Increment the counter at the end of a work session
                            if (isWorkSession) {
                                setCompletedPomodoros(completedPomodoros => completedPomodoros + 1);
                            }
                            return 0;
                        } else {
                            setMinutes(minutes => minutes - 1);
                            return 59;
                        }
                    } else {
                        return seconds - 1;
                    }
                });
            }, 1); // Changed to 1000 for 1 second interval
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, minutes, seconds, isWorkSession]);

    return (
        <div className="pomodoro-timer">
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <p>
                {minutes}:{seconds < 10 ? '0' : ''}{seconds} - 
                {isWorkSession ? ' Work Time!' : ' Break Time!'}
            </p>
            <p>Completed Pomodoros: {completedPomodoros / 2}</p>
        </div>
    );
}

export default PomodoroTimer;
