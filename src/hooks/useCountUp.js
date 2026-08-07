import { useEffect, useRef, useState } from "react";

export default function useCountUp(
    end,
    duration = 1800,
    start = 0
) {
    const [count, setCount] = useState(start);
    const frame = useRef(null);

    useEffect(() => {
        const numericEnd = Number(end);

        if (Number.isNaN(numericEnd)) {
            setCount(end);
            return;
        }

        if (numericEnd <= start) {
            setCount(numericEnd);
            return;
        }

        let startTimestamp = null;

        const animate = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            const value = Math.floor(
                progress * (numericEnd - start) + start
            );

            setCount(value);

            if (progress < 1) {
                frame.current = requestAnimationFrame(animate);
            }
        };

        frame.current = requestAnimationFrame(animate);

        return () => {
            if (frame.current) cancelAnimationFrame(frame.current);
        };
    }, [end, duration, start]);

    return count;
}