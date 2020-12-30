import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import TopicTag from "../components/TopicTag";
import { useArticles } from "../api";
import styled from "styled-components";

const PAGE_NAME = "Home";

const categories = [
  "React",
  "Python",
  "GraphQL",
  "Infra",
  "Career",
  "Personal",
  "Soft Skills",
  "Mobile",
  "HTML",
  "CSS",
].sort((a, b) => (a < b ? -1 : 1));

export default function Home() {
  const { data, error, isFetching } = useArticles();

  return (
    <Layout pageName={PAGE_NAME}>
      <RootStyles>
        <div>
          <h2>
            I'm Nathan Thomas, a software engineer
            <span>
              <a href="https://reactjs.org/">
                <Image
                  alt="React logo"
                  draggable={false}
                  height={100}
                  quality={100}
                  priority
                  src="/react.png"
                  width={100}
                />
              </a>
            </span>
            , reader, writer, musician
            <span>
              <a href="https://soundcloud.com/limbalring">
                <Image
                  alt="Soundcloud logo"
                  draggable={false}
                  height={100}
                  quality={100}
                  priority
                  src="/soundcloud.png"
                  width={100}
                />
              </a>
            </span>
            , instructor, speaker, and investor
            <span>
              <a href="https://bitcoin.org/bitcoin.pdf">
                <Image
                  alt="Bitcoin logo"
                  draggable={false}
                  height={100}
                  quality={100}
                  priority
                  src="/bitcoin-logo.png"
                  width={100}
                />
              </a>
            </span>
            . I currently work at the bird company
            <span>
              <a href="https://twitter.com/nwthomas_">
                <Image
                  alt="Twitter logo"
                  draggable={false}
                  height={263}
                  quality={100}
                  priority
                  src="/twitter-logo-blue.png"
                  width={263}
                />
              </a>
            </span>
            in San Francisco, California.
          </h2>
          <Content>
            <div>
              <h3>Latest Posts</h3>
              <p>Building Your First GraphQL Server</p>
              <p>
                {"If you're a member of the JavaScript community (or one of those people who loves making memes like this), you have likely at least heard about the new(ish) popular kid on the block - TypeScript."
                  .split(" ")
                  .slice(0, 20)
                  .join(" ") + "...."}
              </p>
            </div>
            <div>
              <h3>Top Categories</h3>
              <div>
                {categories.map((category) => (
                  <TopicTag name={category} route={category} key={category} />
                ))}
              </div>
              <div>
                <h3>Popular Posts</h3>
              </div>
            </div>
          </Content>
        </div>
      </RootStyles>
    </Layout>
  );
}

const RootStyles = styled.main`
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 0 3%;
  width: 100%;

  > div {
    max-width: 1400px;
    width: 100%;

    > h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      max-width: 95%;

      @media only screen and (min-width: 600px) {
        font-size: 3rem;
        margin: 80px 0 120px;
        max-width: 75%;
      }

      > span {
        display: inline-block;
        height: 30px;
        margin: 0 0 0 7px;
        width: 30px;

        > a {
          align-items: flex-end;
          display: flex;
          height: 30px;
          position: relative;
          transition: opacity 0.3s;

          > div {
            bottom: -5px;
            position: absolute;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }

      > span:last-child {
        margin: 0 8px;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 50px;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }

  div:first-child {
    flex-grow: 2;
    margin-bottom: 30px;
  }

  div:last-child {
    display: none;
    flex-grow: 1;
    max-width: 460px;
    width: 100%;

    @media only screen and (min-width: 600px) {
      display: block;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 50px;
      width: 100%;
    }

    > div:last-child {
      display: none;

      @media only screen and (min-width: 1000px) {
        display: block;
      }
    }
  }
`;
