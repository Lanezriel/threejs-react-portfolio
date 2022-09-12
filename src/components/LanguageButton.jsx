import { useState } from 'react';
import styled from 'styled-components';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { CircleFlag } from 'react-circle-flags';

import { respondTo } from '../utils/respondTo';

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
  border-radius: 0 0 10px 10px;

  &:hover ${Dropdown} {
    visibility: visible;
  }

  ${respondTo.sm`
    right: 1rem;
  `}
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

  ${respondTo.sm`
    font-size: 1rem;
  `}
`;

const LanguageButton = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const flagSize = window.innerWidth < 768 ? '25': '35';

  const onLanguageChange = (evt) => {
    evt.preventDefault();
    setLanguage(evt.target.value);
    i18n.changeLanguage(evt.target.value);
  };

  return (
    <Wrapper>
      <CircleFlag countryCode={language === 'en' ? 'gb' : language} height={flagSize}/>
      <Dropdown>
        <StyledButton value="en" onClick={onLanguageChange}>
          {t('common.english')}
          <CircleFlag countryCode="gb" height={flagSize} />
        </StyledButton>
        <StyledButton value="fr" onClick={onLanguageChange}>
          {t('common.french')}
          <CircleFlag countryCode="fr" height={flagSize} />
        </StyledButton>
        <StyledButton value="jp" onClick={onLanguageChange}>
          {t('common.japanese')}
          <CircleFlag countryCode="jp" height={flagSize} />
        </StyledButton>
      </Dropdown>
    </Wrapper>
  );
};

export default LanguageButton;
