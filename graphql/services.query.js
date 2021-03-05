import gql from "graphql-tag";

const SERVICES_QUERY = gql`
  {
    getServices {
      id
      title
      introduction
    }
  }
`;

export default SERVICES_QUERY;
