import { TextField } from '@mui/material';

const login = () => {
    return (
      <div className="flexCenter">
        <TextField label="Username" placeholder="Enter username" type="text" />
        <TextField label="Password" placeholder="Enter password" type="password" />
      </div>
    );
}

export default login