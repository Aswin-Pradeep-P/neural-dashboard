import React, { useState } from 'react';
import FormInput from '../../components/form-input/formInput';
import Button from '../../components/button/button';
import Select from '../../components/select/select';
import { useGetLessonPlan, useSaveLessonPlan } from '../../api/planner/planner';
import moment from 'moment';
import { IconButton, TextField } from '@mui/material';
import { RefreshOutlined, AddOutlined, EditOutlined, SaveOutlined } from '@mui/icons-material';
import { cloneDeep } from 'lodash';
import CircularLoader from '../../components/circular-loader/circularLoader';
import { useRecoilValue } from 'recoil';
import { profileAtom } from '../../atoms/profile';
import { subjectId } from '../../constants';
import { useNavigate } from 'react-router-dom';

const lessonPlanMapping: any = {
  expected_learning_outcomes: 'Expected learning outcomes',
  expected_skill_development: 'Expected skill development',
  learning_objectives: 'Learning objectives',
  key_topics_and_concepts: 'Key topics and concepts',
  teaching_methods: 'Teaching methods',
  activities_or_exercises: 'Activities or exercises',
  assessment_methods: 'Assessment methods',
};

const CreatePlan: React.FC = () => {
  const [plan, setPlan] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [grade, setGrade] = useState<any>(null);
  const [subject, setSubject] = useState<any>(null);
  const { getLessonPlan, gettingLessonPlan } = useGetLessonPlan();
  const [lessonPlan, setLessonPlan] = useState<any>({});
  const [draftPlan, setDraftPlan] = useState<any>({});
  const [editableSections, setEditableSections] = useState<{ [key: string]: boolean }>({});
  const [planName, setPlanName] = useState<string>('Draft Plan');
  const profile = useRecoilValue(profileAtom);
  const { saveLessonPlan, savingLessonPlan } = useSaveLessonPlan(profile.id);
  const navigate = useNavigate();

  const handleSend = () => {
    // Simulate plan generation
    getLessonPlan({
      data: {
        sessionId: moment().unix().toString(),
        message,
      },
      onCompleted: (data) => {
        setLessonPlan(data);
      },
    });
    setMessage('');
  };

  const handleRegenerate = (key: string) => {
    const newLessonPlan = cloneDeep(lessonPlan);
    getLessonPlan({
      data: {
        sessionId: moment().unix().toString(),
        message,
      },
      onCompleted: (data) => {
        newLessonPlan[key] = data[key];
        setLessonPlan(newLessonPlan);
      },
    });

    console.log(`Regenerate ${key}`);
  };

  const handleAddToDraft = (key: string) => {
    setDraftPlan((prevDraftPlan: any) => ({
      ...prevDraftPlan,
      [key]: lessonPlan[key],
    }));

    console.log(`Added ${key} to draft plan`);
  };

  const handleEdit = (key: string) => {
    setEditableSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = (key: string, value: string) => {
    setLessonPlan((prevLessonPlan: any) => ({
      ...prevLessonPlan,
      [key]: value.split('\n'),
    }));
    handleEdit(key);
  };

  const handleSaveDraft = () => {
    const data = {
      name: planName,
      subjectId,
      data: draftPlan
    }
    saveLessonPlan({
      data,
      onCompleted: () => {
        navigate('/lesson-plans');
      }
  })
;  };

  const handlePlanNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanName(e.target.value);
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: 'calc(100vh)' }}>
      {(gettingLessonPlan || savingLessonPlan) && <CircularLoader />}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '16px' }}>
            <Select
              value={grade}
              onChange={(newValue) => setGrade(newValue)}
              options={[
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
              ]}
              placeholder="Select grade"
            />
          </div>
          <Select
            value={subject}
            onChange={(newValue) => setSubject(newValue)}
            options={[
              { label: 'Math', value: subjectId },
              { label: 'Science', value: 'Science' },
              { label: 'History', value: 'History' },
              { label: 'Language', value: 'Language' },
            ]}
            placeholder="Select Subject"
          />
        </div>
        <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ccc' }}>
          <FormInput
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            style={{ width: '100%', marginTop: '10px' }}
            multiline={true}
            rows={3}
          />
          <Button label="Send" onClick={handleSend} style={{ marginTop: '10px' }}>
            Send
          </Button>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          {Object.keys(lessonPlan)?.map((key) => (
            <div key={key} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>{lessonPlanMapping[key]}</h3>
                <div>
                  <IconButton onClick={() => handleRegenerate(key)}>
                    <RefreshOutlined />
                  </IconButton>
                  <IconButton onClick={() => handleAddToDraft(key)}>
                    <AddOutlined />
                  </IconButton>
                  <IconButton onClick={() => handleEdit(key)}>
                    {editableSections[key] ? <SaveOutlined /> : <EditOutlined />}
                  </IconButton>
                </div>
              </div>
              {editableSections[key] ? (
                <TextField
                  multiline
                  fullWidth
                  rows={4}
                  defaultValue={(lessonPlan[key] || []).join('\n')}
                  onBlur={(e) => handleSave(key, e.target.value)}
                />
              ) : (
                <ul>
                  {(lessonPlan[key] || []).map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
        {Object.keys(draftPlan).length !== 0 && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              value={planName}
              onChange={handlePlanNameChange}
              variant="outlined"
              fullWidth
              style={{ marginRight: '16px' }}
            />
            <Button label="Save" onClick={handleSaveDraft} />
          </div>
        )}
        {Object.keys(draftPlan)?.map((key) => (
          <div key={key} style={{ marginBottom: '20px' }}>
            <h3>{lessonPlanMapping[key]}</h3>
            <ul>
              {(draftPlan[key] || []).map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePlan;
