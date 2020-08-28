import React from "react";

const PixelContact = () => (
  <React.Fragment>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        fbq('track', 'Contact');
  `,
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: ` 
        <img height="1" width="1" style="display:none" 
        src="https://www.facebook.com/tr?id=908529556229314&ev=Contact&noscript=1"/>
 
        `,
      }}
    />
  </React.Fragment>
);

export default PixelContact;
