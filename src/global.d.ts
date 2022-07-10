declare module App {
  type Theme = {
    colors: {
      navyBlue: String;
      lightGrey: String;
      darkGrey: String;
      caribbeanGreen: String;
      lightTurquoise: String;
      darkGreen: String;
      aliceBlue: String;
      bisque: String;
      black: String;
      blackTransparent: String;
      cobalt: String;
      columbiaBlue: String;
      denim: String;
      denim1: String;
      denim2: String;
      dimGray: String;
      veryLightGrey: String;
      eden: String;
      electricIndigo: String;
      goldenPoppy: String;
      hollywoodCerise: String;
      jade: String;
      lightningYellow: String;
      nobel: String;
      mediumBlue: String;
      midnightBlue: String;
      pelorous: String;
      radicalRed: String;
      salem: String;
      silver: String;
      solitude: String;
      summerSky: String;
      torchRed: String;
      turquoise: String;
      whiteSmoke: String;
      whisper: String;
      white: String;
      zambezi: Strin;
    };
    fontFamily: String;
    fontWeight: {
      regular: Number;
      medium: Number;
      semiBold: Number;
    };
    border: Number;
    responsive: {
      small: String;
      medium: String;
    };
    fontSize: {
      tiny: String;
      small: String;
      normal: String;
      large: String;
      xl: String;
    };
  };
}

declare module "@emotion/styled" {
  import { CreateStyled } from "@emotion/styled/types/index";

  export * from "@emotion/styled/types/index";
  const customStyled: CreateStyled<App.Theme>;
  export default customStyled;
}
