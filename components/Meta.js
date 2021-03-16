import Head from "next/head";
const Meta = ({ seo }) => {
  const default_seo = {
    charSet: "utf-8",
    title: "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה",
    description:
      "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.",
    image: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/orginal_size.png`,
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    type: "website",
  };

  const data = { ...default_seo, ...seo };
  return (
    <Head>
      <html lang="he" />
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={data.title} />
      <meta
        name="og:description"
        property="og:description"
        content={data.description}
      />
      <meta property="og:site_name" content="שקד משכנתאות" />
      <meta property="og:url" content={data.url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:site" content="שקד משכנתאות" />
      <meta name="twitter:creator" content="@nbabai" />
      <link
        rel="icon"
        type="image/png"
        href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/favicon.ico`}

      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/apple-touch-icon.png`}
      />
      {data.css && <link rel="stylesheet" href={`${data.css}`} />}
      <meta property="og:image" content={`${data.image}`} />
      {data.image && <meta name="twitter:image" content={`${data.image}`} />}
      <link rel="canonical" href={data.url} />
      {data.js && <script type="text/javascript" src={`${data.js}`}></script>}
    </Head>
  );
};

export default Meta;
