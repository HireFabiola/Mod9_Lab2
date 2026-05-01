import type { TextInputProps } from '../../types';

// Function declaration
export const TextInput: React.FC<TextInputProps> = ({
  // expected props
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  // Return input field that reads user input
  return (
    <div className="max-w-md mx-auto mt-6">
      <textarea
        className="w-full p-6 bg-white text-black border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};