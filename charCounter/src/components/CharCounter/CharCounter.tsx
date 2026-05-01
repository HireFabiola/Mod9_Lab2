import React from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

// Created new Prop type to find a way to use the TextStats prop in the function call
type Props = CharacterCounterProps & TextStats;

export const CharCounter: React.FC<Props> = ({ characterCount, wordCount, readingTime, minWords = 200, maxWords = 400, targetReadingTime = 2 }) => {
    
    // Created a new object destructured from the ChaarterCountProps interface
    const newObj = { characterCount, wordCount, readingTime }
    return (
        <>
            <StatsDisplay stats={newObj} />
            <p>Min: {minWords} words | Max: {maxWords} words | Target Reading Time: {targetReadingTime} minutes</p>
        </>
    );
};