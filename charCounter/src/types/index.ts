
// Type for TextInput component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Type for StatsDisplay Component
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// Combined types for CharCounter Component
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
