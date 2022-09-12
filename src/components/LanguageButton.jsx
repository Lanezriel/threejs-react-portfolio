import { useState } from 'react';
import styled from 'styled-components';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { CircleFlag } from 'react-circle-flags';

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  right: 0;
  visibility: hidden;
  background: rgba(32, 32, 32, 0.75);
  border-radius: 15px;

  & > button:first-child {
    border-radius: 15px 15px 0 0;
  }

  & > button:last-child {
    border-radius: 0 0 15px 15px;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 5rem;
  z-index: 10;
  padding: 0.5rem 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;

  &:hover ${Dropdown} {
    visibility: visible;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  white-space: nowrap;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const LanguageButton = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const onLanguageChange = (evt) => {
    evt.preventDefault();
    setLanguage(evt.target.value);
    i18n.changeLanguage(evt.target.value);
  };

  return (
    <Wrapper>
      <CircleFlag countryCode={language === 'en' ? 'gb' : language} height="35"/>
      <Dropdown>
        <StyledButton value="en" onClick={onLanguageChange}>
          {t('common.english')}
          <CircleFlag countryCode="gb" height="35" />
        </StyledButton>
        <StyledButton value="fr" onClick={onLanguageChange}>
          {t('common.french')}
          <CircleFlag countryCode="fr" height="35" />
        </StyledButton>
        <StyledButton value="jp" onClick={onLanguageChange}>
          {t('common.japanese')}
          <CircleFlag countryCode="jp" height="35" />
        </StyledButton>
      </Dropdown>
    </Wrapper>
  );
};

export default LanguageButton;
