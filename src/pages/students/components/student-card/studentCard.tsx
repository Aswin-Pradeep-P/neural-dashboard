import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from './studentCard.module.scss';

interface StudentCardProps {
    email: string;
    id: string;
    name: string;
    rollNumber: number;
}

const StudentCard: FC<StudentCardProps> = ({ email, id, name, rollNumber }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.studentCardContainer} onClick={() => navigate(`${id}`)}>
            {/* <Avatar>{name}</Avatar> */}
            <img src="./avatar.jpg" alt="avatar" />
            <span className={styles.name}>{name}</span>
            <span className={styles.email}>{email}</span>
            <span className={styles.roll}>{rollNumber}</span>
        </div>
    );
}

export default StudentCard;