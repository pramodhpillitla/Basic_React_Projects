import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ themeMode: theme, lightTheme, darkTheme }}>
      <ThemeButton />
      <Card />
    </ThemeProvider>
  );
}

export default App;
