import { Navbar, Footer } from "./components/index";
import { AboutMe, Touch, Skills, MyWorks } from "./pages/index";
import styled from "styled-components";
function App() {
  return (
    <Container>
      <Navbar />
      <main>
        <AboutMe />
        <Skills />
        <MyWorks />
        <Touch />
        <Footer />
      </main>
    </Container>
  );
}

const Container = styled.div``;

export default App;
