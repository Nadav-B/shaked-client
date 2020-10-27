import gql from 'graphql-tag';

const TEXTS_QUERY = gql`
{
    getTexts {
      id
      content
    }
  }
  `;

export default TEXTS_QUERY;