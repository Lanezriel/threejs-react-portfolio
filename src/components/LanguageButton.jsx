import { useState } from 'react';
import i18n from 'i18next';
import { CircleFlag } from 'react-circle-flags';

import { Wrapper, Dropdown, StyledButton } from './LanguageButton.styled';

const LanguageButton = () => {
  const [language, setLanguage] = useState(i18n.language);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const flagSize = window.innerWidth < 768 ? '25': '35';

  const onLanguageChange = (value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <Wrapper>
      <CircleFlag
        countryCode={language === 'en' ? 'gb' : language}
        height={flagSize}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      />
      <Dropdown className={dropdownVisible && 'visible'}>
        <StyledButton onClick={() => onLanguageChange('en')}>
          English
          <CircleFlag countryCode="gb" height={flagSize} />
        </StyledButton>
        <StyledButton onClick={() => onLanguageChange('fr')}>
          Français
          <CircleFlag countryCode="fr" height={flagSize} />
        </StyledButton>
        <StyledButton onClick={() => onLanguageChange('jp')}>
          日本語
          <CircleFlag countryCode="jp" height={flagSize} />
        </StyledButton>
      </Dropdown>
    </Wrapper>
  );
};

export default LanguageButton;
