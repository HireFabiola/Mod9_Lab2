import React from 'react';
import type { CharacterCounterProps, TextStats } from '../../types';


type Props = CharacterCounterProps & TextStats;

export const CharCounter: React.FC<Props> = ({ characterCount, wordCount, readingTime, minWords=200, maxWords=1000, targetReadingTime = 5 }) => {
  return (
    <div>
    <p>Character Count: {characterCount}</p>
    <p>Word Count: {wordCount}</p>
    <p>Reading Time: {readingTime}</p>
    <p>Min: {minWords} words | Max: {maxWords} words | Target Reading Time: {targetReadingTime} minutes</p>
    </div>
  );
};