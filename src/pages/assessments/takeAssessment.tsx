import React, { FC, useState, useEffect } from 'react';
import Questionnaire from '../../components/question-generation/questionGeneration';
import { useParams } from 'react-router-dom';
import { useGetAssessments } from '../../api/assessment/assesment';
import CircularLoader from '../../components/circular-loader/circularLoader';
import { set } from 'lodash';

const TakeAssessment: FC = () => {
  const { id } = useParams();
  const { getAssessments, gettingAssessments } = useGetAssessments();
  const [questions, setQuestions] = useState<any[]>([]);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    getAssessments({
      onCompleted: (data) => {
        console.log("here in take assessment", data);
        const currentAssessment = data.assessments.find((assessment: any) => assessment.id === id);
        setName(currentAssessment.name);
        setQuestions(currentAssessment.assessmentQuestions.map((question: any) => {
          return { ...question, text: question.questionText, userAnswer: ''};
        }) )
      }
    });
  }, []);

  console.log(questions)

  return (
    <div>
      {gettingAssessments && <CircularLoader />}
      <h1>Assessment - {name}</h1>
      <Questionnaire questions={questions} />
    </div>
  );
};

export default TakeAssessment;