import { FC } from "react";

import Avatar from "../../../../components/avatar/avatar";
import { StudentCardProps } from "../../types";

import styles from './studentCard.module.scss';

const StudentCard: FC<StudentCardProps> = ({ email, name, rollNumber }) => {
    return (
        <div className={styles.studentCardContainer}>
            {/* <Avatar>{name}</Avatar> */}
            <img src="./avatar.jpg" />
            <span className={styles.name}>{name}</span>
            <span className={styles.email}>{email}</span>
            <span className={styles.roll}>{rollNumber}</span>
        </div>
    );
}

export default StudentCard;