import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
{
    getArticles {
      id
      title
      introduction
    }
  }
  `;

export default ARTICLES_QUERY;