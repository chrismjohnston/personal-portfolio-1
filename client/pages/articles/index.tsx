import React from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import { getArticlePreviews, getCategories } from "../../api";
import type { ArticlePreviewType } from "../../api/articles";
import CategoryArticleSection from "../../components/CategoryArticleSection";
import { useLayoutCategoryArticlePreviews } from "../../hooks/useLayoutCategoryArticlePreviews";
import styled from "styled-components";

const PAGE_NAME = "Articles";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("articlePreviews", getArticlePreviews);
  await queryClient.prefetchQuery("categories", getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function ArticlesPage() {
  const {
    data: articlesData,
    error: articlesError,
    isFetching: isFetchingArticles,
  } = useQuery("articlePreviews", getArticlePreviews);
  const {
    data: categoriesData,
    error: categoriesError,
    isFetching: isFetchingCategories,
  } = useQuery("categories", getCategories);

  if (
    !isFetchingArticles &&
    !isFetchingCategories &&
    !articlesError &&
    !categoriesError &&
    articlesData.items.length >= 1 &&
    categoriesData.items.length >= 1
  ) {
    const categorizedArticles = useLayoutCategoryArticlePreviews(
      categoriesData.items,
      articlesData.items
    );
    const categorizedArticlesArray: Array<
      [string, Array<ArticlePreviewType>]
    > = Object.entries(categorizedArticles);

    return (
      <Layout pageName={PAGE_NAME} withEmojis withFooter>
        <RootStyles>
          <PageTitle title="Articles" type="2" />
          <div>
            {categorizedArticlesArray.map(([category, articles], i) => {
              return (
                <CategoryArticleSection
                  articles={articles}
                  categoryName={category}
                  key={i}
                />
              );
            })}
          </div>
        </RootStyles>
      </Layout>
    );
  } else {
    return <div />;
  }
}

const RootStyles = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces.small};
  margin-bottom: ${({ theme }) => theme.spaces.large};
  padding: 0 3%;
  width: 100%;

  > div {
    max-width: 1400px;
    width: 100%;
  }
`;
