import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Wrapper,
  Toggler,
  Menu,
  StyledLink,
} from './Navbar.styled';
import { ReactComponent as BurgerMenu } from "../assets/icons/burgerMenu.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/homeIcon.svg";
import { ReactComponent as PresentationIcon } from "../assets/icons/presentationIcon.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/experienceIcon.svg";
import { ReactComponent as AchievementIcon } from "../assets/icons/achievementIcon.svg";
import { ReactComponent as ContactIcon } from "../assets/icons/contactIcon.svg";

const Navbar = () => {
  const { t } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Wrapper>
      <Toggler onClick={() => setMenuVisible(!menuVisible)}>
        <BurgerMenu/>
      </Toggler>
      <Menu className={menuVisible && 'visible'}>
        <StyledLink to="/">
          <HomeIcon className="icon"/>
          <div className="text">
            {t('common.home')}
          </div>
        </StyledLink>
        <StyledLink to="/presentation">
          <PresentationIcon className="icon"/>
          <div className="text">
            {t('common.presentation')}
          </div>
        </StyledLink>
        <StyledLink to="/experience">
          <ExperienceIcon className="icon"/>
          <div className="text">
            {t('common.experience')}
          </div>
        </StyledLink>
        <StyledLink to="/achievements">
          <AchievementIcon className="icon"/>
          <div className="text">
            {t('common.achievements')}
          </div>
        </StyledLink>
        <StyledLink to="/contact">
          <ContactIcon className="icon"/>
          <div className="text">
            {t('common.contact')}
          </div>
        </StyledLink>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;