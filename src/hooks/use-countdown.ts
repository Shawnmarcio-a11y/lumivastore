import { useState, useEffect } from "react";

function getStoredEndTime(): number | null {
  const raw = localStorage.getItem("lumiva-countdown-end");
  if (!raw) return null;
  const t = parseInt(raw, 10);
  if (isNaN(t)) return null;
  return t;
}

function setStoredEndTime(t: number) {
  localStorage.setItem("lumiva-countdown-end", String(t));
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(endTime: number): TimeLeft {
  const diff = Math.max(0, endTime - Date.now());
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

export function useCountdown(hours: number): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours, minutes: 0, seconds: 0 });

  useEffect(() => {
    let endTime = getStoredEndTime();
    if (!endTime || endTime <= Date.now()) {
      endTime = Date.now() + hours * 60 * 60 * 1000;
      setStoredEndTime(endTime);
    }

    setTimeLeft(calcTimeLeft(endTime));

    const interval = setInterval(() => {
      const left = calcTimeLeft(endTime!);
      setTimeLeft(left);
      if (left.hours === 0 && left.minutes === 0 && left.seconds === 0) {
        const newEnd = Date.now() + hours * 60 * 60 * 1000;
        setStoredEndTime(newEnd);
        endTime = newEnd;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours]);

  return timeLeft;
}
