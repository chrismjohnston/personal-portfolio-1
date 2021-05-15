import styled, { css } from 'styled-components';
import Link from '../Link';
import ThemeTransitionButton from '../ThemeTransitionButton';
import { useShouldMinimizeNavbar } from '../../hooks/useShouldMinimizeNavbar';
import type { ThemeEnum } from '../../styles/libs/theme';

interface Props {
  onThemeChangeClick: () => void;
  themeName: ThemeEnum | null;
}

function Navbar({ onThemeChangeClick, themeName }: Props) {
  const shouldMinimizeNavbar = useShouldMinimizeNavbar();

  return (
    <RootStyles shouldMinimizeNavbar={shouldMinimizeNavbar}>
      <div>
        <Link href="/">
          <TitleIcon shouldMinimizeNavbar={shouldMinimizeNavbar}>n</TitleIcon>
        </Link>
        <div>
          <nav>
            <Link href="/articles" withStyling>
              Articles
            </Link>
            <Link href="/presentations" withStyling>
              Presentations
            </Link>
            <Link href="/nathan-thomas-resume.pdf" withStyling>
              Resume
            </Link>
            <Link href="/contact" withStyling>
              Contact
            </Link>
          </nav>
          <div>
            <ThemeTransitionButton
              onClick={onThemeChangeClick}
              themeName={themeName}
            />
          </div>
        </div>
      </div>
    </RootStyles>
  );
}

interface StyleProps {
  shouldMinimizeNavbar: boolean;
}

const RootStyles = styled.header<StyleProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.bodyBackground};
  display: flex;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  justify-content: center;
  padding: 0 ${({ theme }) => theme.appDimensions.appHorizontalGutters};
  position: absolute;
  top: 0;
  transition: background ${({ theme }) => theme.transitions.medium} ease-in-out,
    height ${({ theme }) => theme.transitions.medium} ease-in-out;
  width: 100%;
  z-index: 1;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    position: fixed;

    ${({ shouldMinimizeNavbar, theme }) =>
      shouldMinimizeNavbar &&
      css`
        height: ${theme.appDimensions.desktopNavbarMinimizedHeight};
      `}
  }

  > div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.appDimensions.appMaxWidth};
    width: 100%;

    > div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      > nav {
        display: none;

        @media only screen and (min-width: ${({ theme }) =>
            theme.breakpoints.mobile}) {
          display: flex;
          align-self: center;
          justify-content: flex-end;

          > div {
            align-items: center;
            display: flex;
            height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
            justify-content: center;
            text-decoration: none;
            transition: padding-bottom
                ${({ theme }) => theme.transitions.medium} ease-in-out,
              display ${({ theme }) => theme.transitions.medium} ease-in-out,
              opacity ${({ theme }) => theme.transitions.medium} ease-in-out;
            width: ${({ theme }) => theme.appDimensions.navbarLinkWidth};
            visibility: shown;

            ${({ shouldMinimizeNavbar }) =>
              shouldMinimizeNavbar &&
              css`
                display: none;
                opacity: 0;
              `}

            &:hover {
              opacity: ${({ theme }) => theme.opacity.opacity80};
              padding-bottom: ${({ theme }) => theme.spaces.micro};
            }
          }

          > div:nth-child(2) {
            width: ${({ theme }) =>
              `calc(${theme.appDimensions.navbarLinkWidth} + 42px)`};
          }
        }
      }

      > div {
        width: 46px;
      }
    }
  }
`;
interface TitleStyleProps extends StyleProps {
  children: string;
}

const TitleIcon = styled.h1<TitleStyleProps>`
  align-items: center;
  color: ${({ theme }) => theme.colors.textAccentOne};
  cursor: pointer;
  display: flex;
  font-size: 8rem;
  line-height: 1;
  height: ${({ theme }) => theme.appDimensions.mobileNavbarHeight};
  transition: color ${({ theme }) => theme.transitions.medium} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textAccentTwo};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    height: ${({ theme }) => theme.appDimensions.desktopNavbarHeight};
    font-size: 12rem;
    transition: color ${({ theme }) => theme.transitions.medium} ease-in-out,
      font-size ${({ theme }) => theme.transitions.medium} ease-in-out;

    ${({ shouldMinimizeNavbar }) =>
      shouldMinimizeNavbar &&
      css`
        font-size: 8rem;
      `}
  }
`;

export default Navbar;
