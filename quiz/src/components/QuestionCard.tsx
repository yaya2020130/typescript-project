import React  from "react";
import {AnswerObject} from '../App';
//styles

type Props = {
  question: string;
  answers: string[];
  userAnswer: AnswerObject|undefined;
  callback:  (e: React.MouseEvent<HTMLButtonElement>) =>void;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer,  questionNr, totalQuestions }) => {
  return (
  <div>
    <p className='number'>
      Question:{ questionNr} /{totalQuestions}

    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}/>
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswer ?true:false} value={answer} onClick={callback}></button>
            <span dangerouslySetInnerHTML={{ __html: answer }} />

          </div>

        ))}
      </div>
   
  </div>
)}
export default QuestionCard;