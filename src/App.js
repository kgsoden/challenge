import "./App.css";
import Header from "./Components/Header/Header";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import Content from "./Components/Content/Content";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2A79C4",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack>
          <Header />
          <Content />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
