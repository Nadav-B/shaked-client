require('dotenv').config();

module.exports = {
  client: {
    service: {
      name: "Shaked Service",
      url: process.env.NEXT_PUBLIC_API_URL+"/graphql"
    },
  },
};