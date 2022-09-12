import { useTranslation } from "react-i18next";

import { Title, Wrapper } from "./Achievements.styled";

const Achievements = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('common.achievements')} ({t('common.toBeCreated')})</Title>
    </Wrapper>
  );
};

export default Achievements;
