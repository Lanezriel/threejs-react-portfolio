import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import { ReactComponent as HomeIcon } from "../assets/icons/homeIcon.svg";
import { ReactComponent as PresentationIcon } from "../assets/icons/presentationIcon.svg";
import { ReactComponent as ExperienceIcon } from "../assets/icons/experienceIcon.svg";
import { ReactComponent as AchievementIcon } from "../assets/icons/achievementIcon.svg";
import { ReactComponent as ContactIcon } from "../assets/icons/contactIcon.svg";
import { respondTo } from "../utils/respondTo";

const blurryAppear = keyframes`
  to {
    opacity: 1;
    filter: blur(0);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
  opacity: 0;
  filter: blur(2rem);
  transform: translateY(-50%);
  animation: ${blurryAppear} 1s ease-in-out forwards;
  animation-delay: 2s;

  ${respondTo.sm`
    top: 3rem;
    transform: unset;
  `}
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  transition: transform 500ms ease-in-out;
  // Translate to left - icon size - gap size - padding size
  transform: translateX(calc(-100% + 2rem + 0.5rem + 1rem));

  ${respondTo.sm`
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    transform: translateX(calc(-100% + 1.5rem + 0.5rem + 0.5rem));
  `}

  & .icon {
    width: 2rem;
    height: 2rem;

    & .fill {
      fill: white;
      transition: fill 300ms 200ms ease-in-out;
    }

    & .stroke {
      stroke: white;
      transition: stroke 300ms 200ms ease-in-out;
    }

    ${respondTo.sm`
      width: 1.5rem;
      height: 1.5rem;
    `}
  }

  &:hover {
    transform: translateX(0);
  }

  &.active {
    border: solid 2px white;
    border-left: none;
    transform: translateX(0);
    background: linear-gradient(
      90deg,
      rgba(255,255,255,1) 0%,
      rgba(255,255,255,1) 40%,
      rgba(0,0,0,0) 60%,
      rgba(0,0,0,0) 100%
    );
    background-size: 300%;
    background-position-x: 100%;
    transition: background 500ms ease-in-out,
      color 300ms 200ms ease-in-out;

    &:hover {
      background-position-x: 0%;
      color: black;

      & .icon {
        & .fill {
          fill: black;
        }

        & .stroke {
          stroke: black;
        }
      }
    }
  }
`;

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <StyledLink to="/">
        <div className="text">
          {t('common.home')}
        </div>
        <HomeIcon className="icon"/>
      </StyledLink>
      <StyledLink to="/presentation">
        <div className="text">
          {t('common.presentation')}
        </div>
        <PresentationIcon className="icon"/>
      </StyledLink>
      <StyledLink to="/experience">
        <div className="text">
          {t('common.experience')}
        </div>
        <ExperienceIcon className="icon"/>
      </StyledLink>
      <StyledLink to="/achievements">
        <div className="text">
          {t('common.achievements')}
        </div>
        <AchievementIcon className="icon"/>
      </StyledLink>
      <StyledLink to="/contact">
        <div className="text">
          {t('common.contact')}
        </div>
        <ContactIcon className="icon"/>
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;