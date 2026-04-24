# React + TypeScript + Vite

Character Counter
A React + TypeScript character counter app built with Vite. This project demonstrates state management, event handling, component communication, and real-time UI updates using React hooks.

Overview
This app allows users to type into a text field and immediately see statistics about their input, including:
Character count
Word count
Estimated reading time
Optional word count goals

The project is designed to practice React state, props, callbacks, and component-based architecture.

Tech Stack
React
TypeScript
Vite
Tailwind CSS

Project Structure
src/
  components/
    TextInput/
      TextInput.tsx
    StatsDisplay/
      StatsDisplay.tsx
    CharacterCounter/
      CharacterCounter.tsx
  types/
    index.ts

Features
Real-time character counting
Real-time word counting
Estimated reading time calculation
Reusable components
Typed props with TypeScript interfaces
Parent-to-child and child-to-parent communication using callbacks
Responsive Tailwind CSS styling

Component Summary
TextInput
The TextInput component displays a textarea and sends the current text value back to the parent component whenever the user types.

StatsDisplay
The StatsDisplay component receives calculated statistics as props and displays them to the user.

CharacterCounter
The CharacterCounter component manages the main state, calculates the statistics, and connects the input component with the display component.

Reflection Questions
How did you handle state updates when the text changed?
I used the useState hook to store the current text input. The TextInput component used an onChange event handler to detect when the user typed. When the text changed, the child component called the callback function passed from the parent, allowing the parent component to update state with the new text value.

What considerations did you make when calculating reading time?
I calculated reading time based on an average reading speed of about 200 words per minute. I made sure the calculation used the word count instead of the character count. I also considered empty input so that the reading time would not show an incorrect or confusing value.

How did you ensure the UI remained responsive during rapid text input?
The app uses React state updates directly from the input event, which allows the UI to update immediately as the user types. The calculations are simple, so they do not slow down the interface. I also kept the components small and focused so updates remain efficient.

What challenges did you face when implementing the statistics calculations?
One challenge was handling empty input correctly. Splitting an empty string can sometimes return an array with one empty value, so I added logic to return a word count of zero when the trimmed text is empty.

Another challenge was making sure reading time stayed as a number for calculations. I initially used .toFixed() to format the value, but learned that it returns a string rather than a number. This caused type errors in TypeScript, so I adjusted my approach to keep the value as a number during calculations and only format it when displaying it in the UI.

Any other challenges?
Another challenge was understanding component hierarchy and where state should live. I initially thought that only the App component should act as the parent container. Because of this, I placed state and logic there instead of within a feature-level component. I later learned that it is better practice to create a dedicated parent component (such as CharacterCounter) to manage state and coordinate child components like TextInput and StatsDisplay. Although I did not fully restructure my application to reflect this pattern, I now understand it and will apply it in future projects.

Future Improvements
Add progress bars for minimum and maximum word goals
Add color warnings when word limits are exceeded
Add a reset button
Show reading time in minutes and seconds
Save draft text in local storage