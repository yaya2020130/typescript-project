import React  from "react";

type Props = {
  question: string;
  answers: string[];
  userAnswer: boolean;
  callback: any;
  questionNr: number;
  totalQuestions: number;
}
const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNr, totalQuestions }) => {
  return (
  <div>
    <p className='number'>
      Question:{questionNr}/{totalQuestions}

    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}>
      <div>
        {answers.map(answer => (
          <div>
            <button disabled={userAnswer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }} />

          </div>

        ))}
      </div>
    </p>
  </div>
)}
export default QuestionCard;