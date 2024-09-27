import { FC } from "react";
import { AvatarProps, Avatar as MuiAvatar } from "@mui/material";

const getUserInitials = (name: string) => {
    const userName = name.trim().split(' ').filter((word) => word && word.length !== 0);
    let initials = '';

    if (userName.length === 0) return '';
    if (userName.length > 1) initials = userName[0][0] + userName[1][0];
    else if (userName[0][1]) initials = userName[0][0] + userName[0][1];
    else initials = userName[0][0];
    return initials.toUpperCase();
};

const getColor = (name: string) => {
    let hash = 0;
    let i;
    let color = '#';

    for (i = 0; i < name.length; i += 1) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

const Avatar: FC<AvatarProps> = ({ children }) => {
    return (
        <MuiAvatar sx={{ bgcolor: getColor(children as string), fontSize: 18 }} >{getUserInitials(children as string)}</MuiAvatar>
    );
}

export default Avatar