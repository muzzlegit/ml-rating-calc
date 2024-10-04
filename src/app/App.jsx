import { UnitsBar } from "components/modules";
import RootLayout from "./layout/RootLayout";
import ThemeProviderComponent from "./styles/theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderComponent>
      <RootLayout UnitsBar={UnitsBar} />
    </ThemeProviderComponent>
  );
}

export default App;
