import Head from "next/head";
import React from "react";
import Seo from "../classes/seo";

interface MetaOptionalPros {
    seo: Seo
}

const Meta: React.FC<MetaOptionalPros> = ({seo }) => {

        return (
            <Head>
                <html lang="he"/>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description}/>
                <meta property="og:type" content="website"/>
                <meta name="og:title" property="og:title" content={seo.title}/>
                <meta
                    name="og:description"
                    property="og:description"
                    content={seo.description}
                />
                <meta property="og:site_name" content="שקד משכנתאות"/>
                <meta property="og:url" content={seo.url}/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={seo.title}/>
                <meta name="twitter:description" content={seo.description}/>
                <meta name="twitter:site" content="שקד משכנתאות"/>
                <meta name="twitter:creator" content="@nbabai"/>
                <link
                    rel="icon"
                    type="image/png"
                    href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/favicon.ico`}

                />
                <link
                    rel="apple-touch-icon"
                    href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/apple-touch-icon.png`}
                />
                <meta property="og:image" content={`${seo.image}`}/>
                {seo.image && <meta name="twitter:image" content={`${seo.image}`}/>}
                <link rel="canonical" href={seo.url}/>
            </Head>
        );
    }
;

export default Meta;
