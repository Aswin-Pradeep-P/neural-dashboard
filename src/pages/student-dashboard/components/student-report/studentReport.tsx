// import Paper from '@mui/material/Paper';
// import styles from './studentReport.module.scss';
// import TableContainer from '@mui/material/TableContainer';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from '@mui/material';
// import { useGetAssessmentsById, useGetReport } from '../../../../api/assessment/assesment';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import moment from 'moment';
// const StudentReport = () => {
//   const { studentId } = useParams();
//   const {
//     getAssessmentsById,
//     getAssessmentsByIdResponse = { assessments: [] },
//   } = useGetAssessmentsById('1a2330b0-6173-4ff4-88bc-8ad3c0951a80');
//   const {
//     getReport,
//     getReportResponse = { assessments: [] },
//   } = useGetReport();
//   interface AssessmentData {
//     name: string;
//     subject: string;
//     score: string;
//     attendedOn: string;
//   }

//   useEffect(() => {
//     getAssessmentsById({
//       onCompleted: (data) => {
//         console.log(data);
//         console.log('data', getAssessmentsByIdResponse.studentAssessments);
//       },
//     });

//     getReport({
//       data: {
//         user_id: '1a2330b0-6173-4ff4-88bc-8ad3c0951a80'
//       },
//       onCompleted: (data) => {
//         console.log("data 123",data); 
//       },
//     });
//   }, []);

//   return (
//     <Paper className={styles.report}>
//       <h1>Report</h1>
//       <div className={styles.skillList}>
//         <Paper>
//           <div className={styles.skillHeader}>
//             <h3>Student Details</h3>
//             <div>
//               <strong>Name: </strong>
//               {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.name ||
//                 'N/A'}
//             </div>
//             <div>
//               <strong>Email: </strong>
//               {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.email ||
//                 'N/A'}
//             </div>
//             <div>
//               <strong>Phone: </strong>
//               {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.phone ||
//                 'N/A'}
//             </div>
//           </div>
//         </Paper>
//         <Paper>
//           <div className={styles.skillHeader}>
//             <h3>Skill mastery and development</h3>
//           </div>
//         </Paper>
//         <Paper>
//           <div className={styles.skillHeader}>
//             <h3>Strength and weekenes</h3>
//           </div>
//         </Paper>
//       </div>
//       <div className={styles.assessmentList}>
//         <h3 className={styles.assesmentHeader}>Performance Summary</h3>
//         <TableContainer
//           component={Paper}
//           style={{
//             marginTop: '20px',
//             borderRadius: '12px',
//             height: '200px',
//             overflowY: 'scroll',
//           }}
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Subject</TableCell>
//                 <TableCell>Attended on</TableCell>
//                 <TableCell>Score</TableCell>
//                 <TableCell>Average score</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {getAssessmentsByIdResponse?.studentAssessments?.map(
//                 ({ assessment, score, updatedAt }: any, index: any) => (
//                   <TableRow
//                     key={index}
//                     style={
//                       index % 2 === 0
//                         ? { backgroundColor: 'rgba(211, 238, 227, 0.5)' }
//                         : {}
//                     }
//                   >
//                     <TableCell>{assessment.name}</TableCell>
//                     <TableCell>{assessment?.subject?.name}</TableCell>
//                     <TableCell>
//                       {moment(updatedAt).format('DD-MM-YYYY')}
//                     </TableCell>
//                     <TableCell>{score}</TableCell>
//                     <TableCell>{assessment.avgScore}</TableCell>
//                   </TableRow>
//                 )
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//       <div className={styles.recomendations}>
//         <h2>Personal Recomendations</h2>
//         <ul>
//           <li>
//             Set clear goals: Focus on areas where you can improve and work
//             towards specific, achievable targets.
//           </li>
//           <li>
//             Develop study habits: Establish a consistent study routine to
//             reinforce learning.
//           </li>
//           <li>
//             Seek understanding: Don’t just memorize—aim to understand concepts
//             deeply.
//           </li>
//         </ul>
//       </div>
//       <div></div>
//     </Paper>
//   );
// };

// export default StudentReport;

import Paper from '@mui/material/Paper';
import styles from './studentReport.module.scss';
import TableContainer from '@mui/material/TableContainer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useGetAssessmentsById, useGetReport } from '../../../../api/assessment/assesment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const StudentReport = () => {
  const { studentId } = useParams();
  const {
    getAssessmentsById,
    getAssessmentsByIdResponse = { assessments: [] },
  } = useGetAssessmentsById('1a2330b0-6173-4ff4-88bc-8ad3c0951a80');
  
  const {
    getReport,
    getReportResponse = {
      "21st-Century Skills Evaluation": {},
      "Personalized Recommendations": {},
      "Skill Mastery and Development": {
        "21st-Century Skills": {},
        "Skills Needing Improvement": {},
        "Traditional Academic Skills": {}
      },
      "Strengths and Weaknesses": {}
    },
  } = useGetReport();

  useEffect(() => {
    getAssessmentsById({
      onCompleted: (data) => {
        console.log('data', getAssessmentsByIdResponse.studentAssessments);
      },
    });

    getReport({
      data: {
        user_id: '1a2330b0-6173-4ff4-88bc-8ad3c0951a80'
      },
      onCompleted: (data) => {
        console.log("Report data", data);
      },
    });
  }, []);

  return (
    <Paper className={styles.report}>
      <h1>Report</h1>
      <div className={styles.skillList}>
        <Paper>
          <div className={styles.skillHeader}>
            <h3>Student Details</h3>
            <div>
              <strong>Name: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.name || 'N/A'}
            </div>
            <div>
              <strong>Email: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.email || 'N/A'}
            </div>
            <div>
              <strong>Phone: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.phone || 'N/A'}
            </div>
          </div>
        </Paper>

        {/* <Paper>
          <div className={styles.skillHeader}>
            <h3>21st-Century Skills Evaluation</h3>
            <ul>
              {getReportResponse && Object.entries(getReportResponse["21st-Century Skills Evaluation"])?.map(([key, value], index) => (
                <li key={index}>
                  <strong>{key}:</strong> {value as string}
                </li>
              ))}
            </ul>
          </div>
        </Paper> */}

        <Paper>
          <div className={styles.skillHeader}>
            <h3>Skill Mastery and Development</h3>
            <h4>21st-Century Skills</h4>
            <ul>
              {getReportResponse && Object.entries(getReportResponse["Skill Mastery and Development"]["21st-Century Skills"])?.map(([key, value], index) => (
                <li key={index}>
                  <strong>{key}:</strong>{value as string}
                </li>
              ))}
            </ul>
            <h4>Skills Needing Improvement</h4>
            <ul>
              <li><strong>Math:</strong> Rating: {getReportResponse && getReportResponse["Skill Mastery and Development"]["Skills Needing Improvement"].Math?.Rating}, Skill: {getReportResponse && getReportResponse["Skill Mastery and Development"]["Skills Needing Improvement"].Math?.Skill}</li>
              <li><strong>Science:</strong> Rating: {getReportResponse && getReportResponse["Skill Mastery and Development"]["Skills Needing Improvement"].Science?.Rating }, Skill: {getReportResponse && getReportResponse["Skill Mastery and Development"]["Skills Needing Improvement"].Science?.Skill}</li>
            </ul>
          </div>
        </Paper>

        <Paper>
          <div className={styles.skillHeader}>
            <h3>Strengths and Weaknesses</h3>
            <ul>
              <li><strong>Areas for Improvement:</strong> {getReportResponse && getReportResponse["Strengths and Weaknesses"].AreasForImprovement}</li>
              <li><strong>Strengths:</strong> {getReportResponse && getReportResponse["Strengths and Weaknesses"].Strengths }</li>
            </ul>
          </div>
        </Paper>
      </div>

      <div className={styles.assessmentList}>
        <h3 className={styles.assesmentHeader}>Performance Summary</h3>
        <TableContainer
          component={Paper}
          style={{
            marginTop: '20px',
            borderRadius: '12px',
            height: '200px',
            overflowY: 'scroll',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Attended on</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Average score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getAssessmentsByIdResponse?.studentAssessments?.map(
                ({ assessment, score, updatedAt }: any, index: any) => (
                  <TableRow
                    key={index}
                    style={
                      index % 2 === 0
                        ? { backgroundColor: 'rgba(211, 238, 227, 0.5)' }
                        : {}
                    }
                  >
                    <TableCell>{assessment.name}</TableCell>
                    <TableCell>{assessment?.subject?.name}</TableCell>
                    <TableCell>{moment(updatedAt).format('DD-MM-YYYY')}</TableCell>
                    <TableCell>{score}</TableCell>
                    <TableCell>{assessment.avgScore}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className={styles.recommendations}>
        <h2>Personal Recommendations</h2>
        <ul>
          {getReportResponse &&  Object.entries(getReportResponse["Personalized Recommendations"]).map(([key, value], index) => (
            <li key={index}>
              <strong>{key}:</strong> {value as string}
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
};

export default StudentReport;











