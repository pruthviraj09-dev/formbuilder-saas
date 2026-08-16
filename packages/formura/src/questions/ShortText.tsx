import type { Question } from "../types/form";

interface ShortTextProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export function ShortText({
  question,
  value,
  onChange,
}: ShortTextProps) {
  return (
    <div>
      <label>
        {question.title}

        {question.required && " *"}
      </label>

      {question.description && (
        <p>{question.description}</p>
      )}

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}