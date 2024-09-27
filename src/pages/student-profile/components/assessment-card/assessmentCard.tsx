import { FC } from 'react';

import styles from './assessmentCard.module.scss';

interface AssessmentCardProps {
    title: string;
    score: number;
    submittedDate: string;
}

const AssessmentCard: FC<AssessmentCardProps> = ({ title, score, submittedDate }) => {
    return (
        <div className={styles.assessmentCardContainer}>
            <span className={styles.name}>{title}</span>
            <span className={styles.score}>{score}/100</span>
            <span className={styles.date}>{submittedDate}</span>
        </div>
    );
}

export default AssessmentCard;