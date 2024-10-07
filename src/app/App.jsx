import { RatingsTable } from "components/common";
import { UnitsBar } from "components/modules";
import RootLayout from "./layout/RootLayout";
import ThemeProviderComponent from "./styles/theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderComponent>
      <RootLayout UnitsBar={UnitsBar} RatingsTable={RatingsTable} />
    </ThemeProviderComponent>
  );
}

export default App;
