import { Navbar, Footer } from "./components/index";
import { AboutMe, Skills, MyWorks } from "./pages/index";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Navbar />
      <main>
        <AboutMe />
        <Skills />
        <MyWorks />
        <Footer />
      </main>
    </Container>
  );
}

const Container = styled.div``;

export default App;
