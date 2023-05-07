import {
  Navbar,
  Footer,
  AboutMe,
  Skills,
  Touch,
  MyWorks,
} from "./components/index";
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
