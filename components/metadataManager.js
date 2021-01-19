

class MetadataManager {

  constructor(seo, disable) {
    const default_seo = {
      charSet: "utf-8",
      title: "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה",
      description:
        "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.",
      image: "https://shakedm.co.il/logos/favicon.svg",
      url: "https://www.shakedm.co.il",
      type: "website",
    };

    this.data = { ...default_seo, ...seo };

    if(disable) {
      this.data = default_seo;
    }

    console.log(disable,this.data)

  }

  getTitle() {
    return this.data.title;
  }
  getLinks() {
    return [{ rel: "canonical", href: this.data.url }];
  }

  getMetadatas() {
      return [
        { name: "desciprtion", content: this.data.description },
        { property: "og:title", content: this.data.title },
        { property: "og:description", content: this.data.description },
        { property: "og:url", content: this.data.url },
        { property: "og:image", content: this.data.image },
        { property: "og:type", content: this.data.type },
      ];
    
  }
}
export default MetadataManager;
