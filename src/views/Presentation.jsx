import { useEffect } from "react";
import PresentationExperience from "../experiences/PresentationExperience/PresnetationExperience";
import { Section, Title, Wrapper } from "./Presentation.styled";

const Presentation = () => {
  useEffect(() => {
    document.body.style.setProperty('overflow', 'auto');

    return () => {
      document.body.style.setProperty('overflow', 'hidden')
    };
  }, []);

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
      <Section>5</Section>
      <Section>6</Section>
      <Section>7</Section>
      <Section>8</Section>
      <Section>9</Section>
      <Section>10</Section>
      <Section>11</Section>
      <Section>12</Section>
      <Section>13</Section>
    </Wrapper>
  );
};

export default Presentation;
