import type { Question } from "../types/form";
import { ShortText } from "../questions/ShortText";
import { EmailText } from "../questions/EmailText";

interface QuestionRendererProps {
  question: Question;
  value: string;
  onChange: (value: string) => void;
}

export function QuestionRenderer({
  question,
  value,
  onChange,
}: QuestionRendererProps) {
  switch (question.type) {
    case "short_text":
      return (
        <ShortText
          question={question}
          value={value}
          onChange={onChange}
        />
      );
      case "email":
      return (
        <EmailText
          question={question}
          value={value}
          onChange={onChange}
        />
      );

    default:
      return null;
  }
}