import { RatingsTable } from "components/common";
import {
  BuildingsList,
  ResourcesBar,
  ServerSelector,
  UnitsBar,
} from "components/modules";
import RootLayout from "./layout/RootLayout";
import ThemeProviderComponent from "./styles/theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderComponent>
      <RootLayout
        ServerSelector={ServerSelector}
        UnitsBar={UnitsBar}
        RatingsTable={RatingsTable}
        ResourcesBar={ResourcesBar}
        BuildingsList={BuildingsList}
      />
    </ThemeProviderComponent>
  );
}

export default App;
