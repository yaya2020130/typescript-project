import React  from "react";

type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  callback:  (e: React.MouseEvent<HTMLButtonElement>) =>void;
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
          <div key={answer}>
            <button disabled={userAnswer} value={answer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }} />

          </div>

        ))}
      </div>
    </p>
  </div>
)}
export default QuestionCard;