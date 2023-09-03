import GlobalStyles from "styles.global";
import TestComp from "./pages/MainPage";
import theme from "./styles.theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TestComp />
      </ThemeProvider>
    </div>
  );
}

export default App;
