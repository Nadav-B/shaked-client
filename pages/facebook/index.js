import React from "react";
import Head from "next/head";

import Facebook_Script from "./facebook_script";

const Pixel = ({ event }) => {
  return (
    <Head>
      <Facebook_Script event={event} />
    </Head>
  );
};

export default Pixel;
