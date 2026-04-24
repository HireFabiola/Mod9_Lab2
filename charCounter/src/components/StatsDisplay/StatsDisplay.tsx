import type { StatsDisplayProps } from "../../types"

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true
}) => {
  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white text-black rounded-lg shadow-md border border-gray-200">
      <p className="mb-2">
        <span className="font-semibold">Character Count:</span> {stats.characterCount}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Word Count:</span> {stats.wordCount}
      </p>

      {showReadingTime && (
        <p>
          <span className="font-semibold">Reading Time:</span> {stats.readingTime}
        </p>
      )}
    </div>
  )
}