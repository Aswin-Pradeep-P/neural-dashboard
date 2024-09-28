import { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from './studentCard.module.scss';

interface StudentCardProps {
    email: string;
    gender: string;
    id: string;
    name: string;
    rollNumber: number;
}

const StudentCard: FC<StudentCardProps> = ({ email, gender, id, name, rollNumber }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.studentCardContainer} onClick={() => navigate(`${id}`)}>
            {/* <Avatar>{name}</Avatar> */}
            <div className={styles.leaderAvatar}>
                <img src={`./avatars/${gender}${Math.floor(Math.random() * 3) + 1}.svg`} />
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.email}>{email}</span>
            <span className={styles.roll}>Roll no. {rollNumber}</span>
        </div>
    );
}

export default StudentCard;