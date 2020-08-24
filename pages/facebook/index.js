import React from "react";
import Head from "next/head";

import FACEBOOK_SURVEY_SENT_PIXEL from "./survey_pixel";
import FACEBOOK_CONTACT_SENT_PIXEL from "./contact_sent_pixel";

export default ({ name }) => {
  console.log(name);
  return (
    <Head>
      {name === "FACEBOOK_SURVEY_SENT_PIXEL" && <FACEBOOK_SURVEY_SENT_PIXEL />}
      {name === "FACEBOOK_CONTACT_SENT_PIXEL" && (
        <FACEBOOK_CONTACT_SENT_PIXEL />
      )}
    </Head>
  );
};
