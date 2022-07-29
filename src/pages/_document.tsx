import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <title>שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה</title>
      <Head>
        <link rel="canonical" href="https://shakedm.co.il" />

        <meta
          property="og:title"
          content="שקד משכנתאות - יעוץ משכנתאות וכלכלת המשפחה"
          key="og:title"
        />
        <Html lang="he" />

        <meta
          name="description"
          content="שקד משכנתאות- המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר."
          key="description"
        />

        <meta
          name="og:description"
          content="שקד משכנתאות- המשרד שיעניק לכם את הידע הנדרש לקבלת החלטות נכונות ויפעל עבורכם אל מול הבנקים והגופים הפיננסים כדי להשיג לכם את המשכנתא המושלמת. המשרד מאגד בתוכו יועצים מהמובילים בשוק המשכנתאות, בעלי השכלה פיננסית, הכשרה מקצועית ושנים של ניסיון במערכת הבנקאית ומחוצה לה. היועצים שלנו ילוו אתכם מקבלת ההחלטה לרכישת נכס ועד לחתימות על המשכנתא, ידאגו ליצור התאמה מושלמת בין המשכנתא ליכולת הכלכלית שלכם ויפעלו מול הבנקים והגופים הפיננסים להשגתה בתנאים הטובים ביותר."
          key="og:description"
        />

        <meta name="og:type" content="website" key="og:type" />

        <meta name="og:url" content="https://shakedm.co.il" key="og:url" />

        <meta
          name="og:image"
          content="http://localhost:3000/logos/favicon.svg"
          key="image"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="logos/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="logos/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="logos/favicon-16x16.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
