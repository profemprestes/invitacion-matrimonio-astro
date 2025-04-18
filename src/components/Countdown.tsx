import { useEffect, useState, useCallback } from 'react';

interface CountdownProps {
    targetDateISO: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDateISO }) => {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    const formatTime = useCallback((time: number): string => {
        return Math.floor(time).toString().padStart(2, "0");
    }, []);

    useEffect(() => {
        const targetDate = new Date(targetDateISO);
        const targetTime = targetDate.getTime();

        if (isNaN(targetTime)) {
            console.error(`[Countdown] Invalid target date: "${targetDateISO}"`);
            return;
        }

        const updateCountdown = () => {
            const now = Date.now();
            const difference = Math.max(targetTime - now, 0);

            const days = Math.floor(difference / DAY);
            const hours = Math.floor((difference % DAY) / HOUR);
            const minutes = Math.floor((difference % HOUR) / MINUTE);
            const seconds = Math.floor((difference % MINUTE) / SECOND);

            setTimeLeft({
                days: formatTime(days),
                hours: formatTime(hours),
                minutes: formatTime(minutes),
                seconds: formatTime(seconds)
            });

            if (difference === 0) {
                console.log("[Countdown] Countdown finished!");
                clearInterval(intervalId);
            }
        };

        updateCountdown();
        const intervalId = setInterval(updateCountdown, SECOND);

        return () => clearInterval(intervalId);
    }, [targetDateISO, DAY, HOUR, MINUTE, SECOND, formatTime]);

    return (
        <div data-date={targetDateISO} className="countdown-container">
            <div className="countdown-unit">
                <div className="countdown-card">
                    <span data-days className="countdown-number">{timeLeft.days}</span>
                </div>
                <span className="countdown-label">DÍAS</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
                <div className="countdown-card">
                    <span data-hours className="countdown-number">{timeLeft.hours}</span>
                </div>
                <span className="countdown-label">HS</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
                <div className="countdown-card">
                    <span data-minutes className="countdown-number">{timeLeft.minutes}</span>
                </div>
                <span className="countdown-label">MIN</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-unit">
                <div className="countdown-card">
                    <span data-seconds className="countdown-number">{timeLeft.seconds}</span>
                </div>
                <span className="countdown-label">SEG</span>
            </div>
        </div>
    );
};

export default Countdown;