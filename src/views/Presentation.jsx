import PresentationExperience from "../experiences/PresentationExperience/PresnetationExperience";
import { Section, Title, Wrapper } from "./Presentation.styled";

const Presentation = () => {
  return (
    <Wrapper>
      <PresentationExperience />
      <Section>
        <Title>Presentation (to be created)</Title>
      </Section>
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
    </Wrapper>
  );
};

export default Presentation;
