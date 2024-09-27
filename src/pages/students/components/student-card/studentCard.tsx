import { FC } from "react";
import { Person2 } from "@mui/icons-material";

import { StudentCardProps } from "../../types";

import styles from './studentCard.module.scss';

const StudentCard: FC<StudentCardProps> = ({ name, rollNumber }) => {
    return (
        <div className={styles.studentCardContainer}>
            <Person2 />
            <span>{name}</span>
            <span>{rollNumber}</span>
        </div>
    );
}

export default StudentCard;