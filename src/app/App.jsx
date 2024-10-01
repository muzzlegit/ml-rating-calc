import RootLayout from "./layout/RootLayout";
import ThemeProviderComponent from "./styles/theme/ThemeProvider";

function App() {
  return (
    <ThemeProviderComponent>
      <RootLayout>
        <div>test</div>
      </RootLayout>
    </ThemeProviderComponent>
  );
}

export default App;
