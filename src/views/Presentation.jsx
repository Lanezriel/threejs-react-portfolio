import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import PresentationExperience from "../experiences/PresentationExperience/PresentationExperience";
import { Section, Title, Wrapper } from "./Presentation.styled";

const Presentation = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.setProperty('overflow-y', 'auto');
    document.documentElement.classList.add('hidden-scrollbar');

    return () => {
      document.body.style.setProperty('overflow-y', 'hidden');
      document.documentElement.classList.remove('hidden-scrollbar');
    };
  }, []);

  return (
    <Wrapper>
      <PresentationExperience />
      <Section>
        <Title>{t('common.presentation')} ({t('common.inCreationProcess')})</Title>
      </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
      <Section> </Section>
    </Wrapper>
  );
};

export default Presentation;
