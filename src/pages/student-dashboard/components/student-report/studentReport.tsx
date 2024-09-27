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
import {
  useGetAssessmentsById,
  useGetComment,
  useGetReport,
} from '../../../../api/assessment/assesment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import CircularLoader from '../../../../components/circular-loader/circularLoader';
import FormInput from '../../../../components/form-input/formInput';
import Button from '../../../../components/button/button';
import RadioButtonGroup from '../../../../components/radio/radio';

const StudentReport = () => {
  const { studentId } = useParams();
  const [message, setMessage] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState('happy');

  const [ comment, setComment ] = useState('');
  const {
    getAssessmentsById,
    gettingAssessments,
    getAssessmentsByIdResponse = { assessments: [] },
  } = useGetAssessmentsById(studentId as string);

  const {
    getReport,
    gettingReport,
    getReportResponse = {
      '21st-Century Skills Evaluation': {},
      'Personalized Recommendations': {},
      'Skill Mastery and Development': {
        '21st-Century Skills': {},
        'Skills Needing Improvement': {},
        'Traditional Academic Skills': {},
      },
      'Strengths and Weaknesses': {},
    },
  } = useGetReport();

  const {
    getComment,
    gettingComment,
    getCommentResponse
  } = useGetComment();


  const loading = gettingAssessments || gettingReport;
  const tone = [
    {label: 'Happy',
      value: 'happy'
    },
    {label: 'Sad',
      value: 'sad'
    },
    {label: 'Angry',
      value: 'angry'
    },
    {label: 'Witty',
      value: 'witty'
    },
  ]

  useEffect(() => {
    getAssessmentsById({
      onCompleted: (data) => {
        console.log('data', getAssessmentsByIdResponse.studentAssessments);
      },
    });

    getReport({
      data: {
        user_id: studentId,
      },
      onCompleted: (data) => {
        console.log('Report data', data);
      },
    });
  }, []);

  const handleGenerate = () => {
    getComment({
      data: {
        "tone": selectedTone,
        "formality": "In formal",
        "user_id": studentId,
        "keywords": message
      },
      onCompleted: (data) => {
        const comments = data.replace('Comment:', '').trim();
        setComment(comments);
        setMessage('');
      },
    });
  };

  return (
    <Paper className={styles.report}>
      {loading && <CircularLoader />}
      <h1>Report</h1>
      <div className={styles.skillList}>
        <Paper>
          <div className={styles.skillHeader}>
            <h3>Student Details</h3>
            <div>
              <strong>Name: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.name ||
                'N/A'}
            </div>
            <div>
              <strong>Email: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.email ||
                'N/A'}
            </div>
            <div>
              <strong>Phone: </strong>
              {getAssessmentsByIdResponse?.studentAssessments[0]?.user?.phone ||
                'N/A'}
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
              {getReportResponse &&
                Object.entries(
                  getReportResponse['Skill Mastery and Development'][
                    '21st-Century Skills'
                  ]
                )?.map(([key, value], index) => (
                  <li key={index}>
                    <strong>{key}:</strong>
                    {value as string}
                  </li>
                ))}
            </ul>
            <h4>Skills Needing Improvement</h4>
            <ul>
              <li>
                <strong>Math:</strong> Rating:{' '}
                {getReportResponse &&
                  getReportResponse['Skill Mastery and Development'][
                    'Skills Needing Improvement'
                  ].Math?.Rating}
                , Skill:{' '}
                {getReportResponse &&
                  getReportResponse['Skill Mastery and Development'][
                    'Skills Needing Improvement'
                  ].Math?.Skill}
              </li>
              <li>
                <strong>Science:</strong> Rating:{' '}
                {getReportResponse &&
                  getReportResponse['Skill Mastery and Development'][
                    'Skills Needing Improvement'
                  ].Science?.Rating}
                , Skill:{' '}
                {getReportResponse &&
                  getReportResponse['Skill Mastery and Development'][
                    'Skills Needing Improvement'
                  ].Science?.Skill}
              </li>
            </ul>
          </div>
        </Paper>

        <Paper>
          <div className={styles.skillHeader}>
            <h3>Strengths and Weaknesses</h3>
            <ul>
              <li>
                <strong>Areas for Improvement:</strong>{' '}
                {getReportResponse &&
                  getReportResponse['Strengths and Weaknesses']
                    .AreasForImprovement}
              </li>
              <li>
                <strong>Strengths:</strong>{' '}
                {getReportResponse &&
                  getReportResponse['Strengths and Weaknesses'].Strengths}
              </li>
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
                    <TableCell>
                      {moment(updatedAt).format('DD-MM-YYYY')}
                    </TableCell>
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
          {getReportResponse &&
            Object.entries(
              getReportResponse['Personalized Recommendations']
            ).map(([key, value], index) => (
              <li key={index}>
                <strong>{key}:</strong> {value as string}
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>Teachers Remark</h2>
        <div
          style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}
        >
          <FormInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            style={{ width: '100%', marginTop: '10px' }}
            multiline={true}
            rows={3}
          />
        </div>
        <div>
            <RadioButtonGroup
              label=''
              options={tone}
              onChange={(event) => setSelectedTone(event.target.value)}
              selectedValue={selectedTone}
            />
          </div>
        <Button
          label="Generate"
          onClick={handleGenerate}
          style={{ marginTop: '10px' }}
        >
          Generate
        </Button>
        <p>
        {comment.split('\n').map((line, index) => (
          <span key={index}>
            {line.trim()}
            <br />
          </span>
        ))}
      </p>
      </div>
    </Paper>
  );
};

export default StudentReport;
