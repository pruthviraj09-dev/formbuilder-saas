import { Formura } from "./components/Formura";

const form = {
  id: "frm_123",

  title: "Customer Feedback",

  description: "Tell us about your experience.",

  questions: [
    {
      id: "q1",
      type: "short_text" as const,
      title: "What's your name?",
      required: true,
    },
     {
      id: "q2",
      type: "email" as const,
      title: "write your email?",
      required: true,
    },
  ],
};

function App() {

  return (
    <div>
      <Formura 
      form={form}
       onSubmit={(answers) => {
          console.log("Answers:", answers);
        }}
      />
    </div>
  )




}

export default App