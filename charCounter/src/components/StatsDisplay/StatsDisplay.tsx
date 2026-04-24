import type { StatsDisplayProps } from "../../types"


export const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime = true }) => {
    return (
        <div>
            <p>Character Count:  {stats.characterCount}</p>
            <p>Word Count: {stats.wordCount}</p>

            {/* Check condition for displaying reading time */}
            {showReadingTime ? (
                <p>Reading Time: {stats.readingTime}</p>
            ) : null}
        </div>
    )
}