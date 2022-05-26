class Seo {

    charset: string;
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;

    constructor() {
        this.charset = "utf-8";
        this.title = "שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה";
        this.description = "המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר.";
        this.image = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/logos/orginal_size.png`;
        this.url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`;
        this.type = "website";
    }


}

export default Seo;