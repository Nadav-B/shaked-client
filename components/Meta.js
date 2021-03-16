import Head from "next/head";
const Meta = ({ seo }) => {
  const default_seo = {
    charSet: "utf-8",
    title: "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה",
    description:
      "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.",
    image: "https://shakedm.co.il/logos/orginal_size.png",
    url: "https://www.shakedm.co.il",
    type: "website",
  };

  const data = { ...default_seo, ...seo };
  console.log(data);
  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={data.title} />
      <meta
        name="og:description"
        property="og:description"
        content={data.description}
      />
      <meta property="og:site_name" content={data.title} />
      <meta property="og:url" content={`${data.canonical}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:site" content="@propernounco" />
      <meta name="twitter:creator" content="@propernounco" />
      <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
      {data.css && <link rel="stylesheet" href={`${data.css}`} />}
      {data.image ? (
        <meta property="og:image" content={`${data.image}`} />
      ) : (
        <meta
          property="og:image"
          content="https://www.propernoun.co/static/images/proper-noun-social.png"
        />
      )}
      {data.image && <meta name="twitter:image" content={`${data.image}`} />}
      {data.canonical && <link rel="canonical" href={`${data.canonical}`} />}
      {data.js && <script type="text/javascript" src={`${data.js}`}></script>}
    </Head>
  );
};

export default Meta;
