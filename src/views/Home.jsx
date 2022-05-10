import { Subtitle, Title, Wrapper } from "./Home.styled";
import HomeExperience from "../experiences/HomeExperience/HomeExperience";

const Home = () => {
  return (
    <Wrapper>
      <HomeExperience/>
      <Title>Dimitri Delbrouck</Title>
      <Subtitle>Frontend experiences developer</Subtitle>
    </Wrapper>
  );
};

export default Home;