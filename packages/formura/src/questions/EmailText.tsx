import type { Question } from "../types/form";

interface EmailTextProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export function EmailText({
  question,
  value,
  onChange,
}: EmailTextProps) {
  return (
    <div>
      <label>
          {question.title}:
      </label>

      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}