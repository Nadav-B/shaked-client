
 const default_seo = {
    title: "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה",
    description:
      "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.",
    image: "https://shakedm.co.il/logos/favicon.svg",
    link: "https://shakedm.co.il"

  };

const SEO = ({seo}) => {
 
  let data = {...default_seo, ...seo};
  return (
    <>
      <meta
        name="description"
        content={data.description}
        key="description"
      ></meta>
      <link rel="canonical" href={data.link} />
      <meta property="og:url" content={data.link} key="ogimage" />
      <meta property="og:title" content={data.title} key="ogtitle" />
      <meta property="og:image" content={data.image} key="ogimage" />
      <meta property="og:description" content={data.description} key="ogdesc" />
      <meta property="og:type" content="website" />


    </>
  );
};


export default SEO;
