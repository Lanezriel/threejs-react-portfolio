import { useTranslation } from "react-i18next";

import { Title, Wrapper } from "./Experience.styled";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('common.experience')} ({t('common.toBeCreated')})</Title>
    </Wrapper>
  );
};

export default Experience;
