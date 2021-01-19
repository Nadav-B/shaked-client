const MetadataManager = (seo, disable = false) => {


  const default_seo = {
    charSet: "utf-8",
    title: "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה",
    description:
      "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.",
    image: "https://shakedm.co.il/logos/favicon.svg",
    url: "https://www.shakedm.co.il",
    type: "website",
  };


  if (disable) {
    return {
      title: default_seo.title,
      links: [],
      metadatas: [],
    };
  }
  const data = { ...default_seo, ...seo };

  const getTitle = () => {
    return data.title;
  };
  const getLinks = () => {
    return [{ rel: "canonical", href: data.url }];
  };

  const getMetadatas = () => {
    return [
      { name: "desciprtion", content: data.description },
      { property: "og:title", content: data.title },
      { property: "og:description", content: data.description },
      { property: "og:url", content: data.url },
      { property: "og:image", content: data.image },
      { property: "og:type", content: data.type },
    ];
  };

  return {
    title: getTitle(),
    links: getLinks(),
    metadatas: getMetadatas(),
  };
};

export default MetadataManager;
