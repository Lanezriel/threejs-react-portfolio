import { useTranslation } from "react-i18next";

import { Title, Wrapper } from "./Contact.styled";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('common.contact')} ({t('common.toBeCreated')})</Title>
    </Wrapper>
  );
};

export default Contact;
