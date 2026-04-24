import React from 'react';
import type {  TextStats } from '../../types';

export const CharCounter: React.FC<TextStats> = ({ characterCount, wordCount, readingTime }) => {
  return (
    <div>
    <p>Character Count: {characterCount}</p>
    <p>Word Count: {wordCount}</p>
    <p>Reading Time: {readingTime}</p>
    </div>
  );
};