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
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  main {
    margin: 0 auto;
    width: 90%;
    height: auto;
  }
  @media (max-width: 412px){
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default App;
