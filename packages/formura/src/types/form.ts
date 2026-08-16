export type QuestionType =
  | "short_text"
  | "email"
  | "single_choice"
  | "rating";

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  required?: boolean;
  options?: QuestionOption[];
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}