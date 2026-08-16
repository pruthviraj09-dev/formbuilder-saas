import { useState } from "react";
import type { FormSchema } from "../types/form";
import { QuestionRenderer } from "./QuestionRenderer";

interface FormuraProps {
  form: FormSchema;

  onSubmit?: (
    answers: Record<string, unknown>
  ) => void;
}

export function Formura({
  form,
  onSubmit,
}: FormuraProps) {
  const [answers, setAnswers] =
    useState<Record<string, unknown>>({});

  function updateAnswer(
    questionId: string,
    value: unknown
  ) {
    setAnswers((previous) => ({
      ...previous,
      [questionId]: value,
    }));
  }

  function handleSubmit(
    event: React.FormEvent
  ) {
    event.preventDefault();

    onSubmit?.(answers);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{form.title}</h1>

      {form.description && (
        <p>{form.description}</p>
      )}

      {form.questions.map((question) => (
        <QuestionRenderer
          key={question.id}
          question={question}
          value={(answers[question.id] as string) ?? ""}
          onChange={(value) =>
            updateAnswer(question.id, value)
          }
        />
      ))}

      <button type="submit">
        Submit
      </button>
    </form>
  );
} 