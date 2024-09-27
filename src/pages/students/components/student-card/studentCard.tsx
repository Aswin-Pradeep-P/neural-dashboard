import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { StudentCardProps } from "../../types";

import styles from './studentCard.module.scss';

const StudentCard: FC<StudentCardProps> = ({ email, name, rollNumber }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.studentCardContainer} onClick={() => navigate(`${rollNumber}`)}>
            {/* <Avatar>{name}</Avatar> */}
            <img src="./avatar.jpg" />
            <span className={styles.name}>{name}</span>
            <span className={styles.email}>{email}</span>
            <span className={styles.roll}>{rollNumber}</span>
        </div>
    );
}

export default StudentCard;