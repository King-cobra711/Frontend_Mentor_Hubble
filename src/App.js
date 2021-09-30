import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/container.styled";
import Header from "./components/header";
import GlobalStyle from "./components/styles/global";
import content from "./content";
import Card from "./components/card";
import Footer from "./components/footer";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, key) => {
            return <Card key={key} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
