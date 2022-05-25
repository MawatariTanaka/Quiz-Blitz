import { useState, useEffect } from 'react';

export default function Gameplay({ currentChallenge }) {
    useEffect(() => {
        if (currentChallenge) {
            console.log(currentChallenge);
        }
    }, [currentChallenge]);
    return <div></div>;
}
