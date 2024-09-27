
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '../../components/select/select';
import FormInput from '../../components/form-input/formInput';
import Button from '../../components/button/button';

import styles from './createAssessment.module.scss';

const DialogBox = ({open, onClose, difficulty, handleDifficultyChange, subject, handleSubjectChange, chatInput, handleChatInputChange, handleChatSubmit}: any) => {
  return (
    <Dialog
        open={open}
        onClose={onClose}
        className={styles.dialogWrapper}
        PaperProps={{
            style: {
                borderRadius: '16px',
                paddingTop: '20px',
                paddingBottom: '25px',
                paddingLeft: '15px',
                paddingRight: '15px',
            },
        }}
    >
        <DialogTitle style={{fontWeight: '600'}}>Create New Assessment</DialogTitle>
        <DialogContent>
            <div className={styles.selectorArea}>
                <Select
                    label="Select Difficulty"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                    options={[
                        { label: 'Easy', value: 'easy' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Hard', value: 'hard' },
                    ]}
                    placeholder="Select Difficulty"
                />
                <Select
                    label="Select Subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    options={[
                        { label: 'Math', value: 'a7ba5181-3d8d-402c-9197-6bc6b7e5721c' },
                        { label: 'Science', value: 'Science' },
                        { label: 'History', value: 'History' },
                        { label: 'Language', value: 'Language' },
                    ]}
                    placeholder="Select Subject"
                />
                    <FormInput
                        type="text"
                        value={chatInput}
                        onChange={handleChatInputChange}
                        placeholder="Type your assessment description..."
                        style={{ width: '80%', marginRight: '10px' }}
                        multiline={true}
                        rows={2}
                        label="Assessment Description"
                    />
                    <Button className={styles.dialogbtn} variant="contained" label="Generate" onClick={handleChatSubmit} />
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default DialogBox;