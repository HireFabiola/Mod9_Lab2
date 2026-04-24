import React from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';


type Props = CharacterCounterProps & TextStats;

export const CharCounter: React.FC<Props> = ({ characterCount, wordCount, readingTime, minWords = 200, maxWords = 400, targetReadingTime = 2 }) => {
    const newObj = { characterCount, wordCount, readingTime }
    return (
        <>
            <StatsDisplay stats={newObj} />
            <p>Min: {minWords} words | Max: {maxWords} words | Target Reading Time: {targetReadingTime} minutes</p>
        </>
    );
};