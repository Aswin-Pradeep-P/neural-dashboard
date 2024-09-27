import { FC } from "react";

import Avatar from "../../../../components/avatar/avatar";
import { StudentCardProps } from "../../types";

import styles from './studentCard.module.scss';

const StudentCard: FC<StudentCardProps> = ({ name, rollNumber }) => {
    return (
        <div className={styles.studentCardContainer}>
            <Avatar>{name}</Avatar>
            <span>{name}</span>
            <span>{rollNumber}</span>
        </div>
    );
}

export default StudentCard;