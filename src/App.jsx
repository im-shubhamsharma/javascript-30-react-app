import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme.js";
import GlobalStyles from "./styles/Global";
import Footer from "./pages/Footer/Footer.jsx";
import AllRoutes from "./utils/AllRoutes.jsx";
import {useLocation} from "react-router-dom"

function App() {
  
  let location = useLocation(); // using location to show footer on only home page

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AllRoutes />
      {location.pathname === "/" && <Footer />}
    </ThemeProvider>
  );
}

export default App;
