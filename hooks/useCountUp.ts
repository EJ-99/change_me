import { useEffect, useState } from "react";

export const useCountUp = (target: number, duration = 800) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            const currentCount = Math.round(target * progress);
            setCount(currentCount);

            if (currentFrame === totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [target, duration]);

    return count;
};
