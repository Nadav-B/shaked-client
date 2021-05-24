import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
{
    getArticles {
      id
      title
      introduction
      tag
    }
  }
  `;

export default ARTICLES_QUERY;