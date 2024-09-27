import { FC } from "react";

import styles from './classCard.module.scss';
import SchoolIcon from '@mui/icons-material/School';
import Paper from "@mui/material/Paper";

export interface ClassCardProps {
    classes: string;
  }

const ClassCard: FC<ClassCardProps> = ({ classes }) => {
    return (
        <Paper className={styles.classCardContainer}>
            <SchoolIcon fontSize="large"/>
            <span className={styles.name}>{classes}</span>
        </Paper>
    );
}

export default ClassCard;