import { useTranslation } from "react-i18next";
import "../locales/i18n";

import { Subtitle, Title, Wrapper } from "./Home.styled";
import HomeExperience from "../experiences/HomeExperience/HomeExperience";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <HomeExperience/>
      <Title>Dimitri Delbrouck</Title>
      <Subtitle>{t("common.title")}</Subtitle>
    </Wrapper>
  );
};

export default Home;