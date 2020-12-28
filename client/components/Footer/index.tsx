import React from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../Icons";
import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <RootStyles>
      <div>
        <div>
          <p>"Be most excellent to each other."</p>
          <p>{`© ${currentYear} Nathan Thomas`}</p>
        </div>
        <nav>
          <div>
            <a href="https://github.com/nwthomas">
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/nwthomas/">
              <InstagramIcon />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/nwthomas-dev/">
              <LinkedInIcon />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/nwthomas_">
              <TwitterIcon />
            </a>
          </div>
          <Link href="/contact">
            <div>
              <MailIcon />
            </div>
          </Link>
        </nav>
      </div>
    </RootStyles>
  );
}

const RootStyles = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-top: 1px solid ${({ theme }) => theme.colors.bodyBackgroundAccentOne};
  bottom: 0;
  display: flex;
  height: 200px;
  justify-content: center;
  padding: 0 3%;
  position: absolute;
  width: 100%;

  > div {
    align-items: flex-start;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    max-width: 1400px;
    width: 100%;

    @media only screen and (min-width: 600px) {
      align-items: center;
      flex-direction: row;
    }

    div:first-child {
      font-style: italic;
    }

    nav {
      align-items: center;
      display: flex;
      height: 50px;
      justify-content: flex-start;
      margin-bottom: 10px;
      width: 100%;

      @media only screen and (min-width: 600px) {
        height: 100px;
        justify-content: flex-end;
        margin-bottom: 0;
        width: 50%;
      }

      > div {
        cursor: pointer;
        margin: 0 6% 0 0;
        transition: opacity 0.3s;
        width: 30px;

        @media only screen and (min-width: 600px) {
          margin: 0 3.5%;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
