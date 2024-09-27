import { createTheme, ThemeProvider } from "@mui/material/styles";

import RootLayout from "./layout/rootLayout";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#25BF8B'
    },
    secondary: {
      main: '#D3EEE3'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <RootLayout />
      </ThemeProvider>
    </div>
  );
}

export default App;
