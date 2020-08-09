import React from "react"
import styled from "@emotion/styled"
const Fotter = () => (
  <StyledFooter>
        <div class="address">
          <span>שקד משכנתאות </span>
          <span> רמת גן </span>
          <span>ישראל </span>
        </div>

        <div class="phones">
          <span>
            נייד:<a href="tel:+97250742491934"> 050-7424-919</a>
          </span>
          <span>פקס: 077-3179998</span>
        </div>

        <div class="digital-contact">
          <span>
            <a href="mailto:shay@shakedm.co.il?Subject=Hello" target="_top">
              shay@shakedm.co.il
            </a>
          </span>
          <span>
            <a href="https://shakedm.co.il/" target="_top">
              www.shakedm.co.il
            </a>
          </span>
        </div>
        <div class="icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/%D7%A9%D7%A7%D7%93-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%99%D7%A2%D7%95%D7%A5-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-%D7%95%D7%9B%D7%9C%D7%9B%D7%9C%D7%AA-%D7%9E%D7%A9%D7%A4%D7%97%D7%94-2177117312351276/"
            >
              {" "}
              Facebook
            </a>
        </div>
  </StyledFooter>
)

const StyledFooter = styled.footer`


    width: 40%;
    position: absolute;
    margin: auto;

    height: 150px;
    text-align: center;
    padding: 30px;

    .address {
      span:first-child {
        display: block;
        margin-bottom: 10px;
      }
      span {
        margin-right: 5px;
      }
    }
    .phones {
      padding-top: 10px;

      span {
        margin-right: 5px;
      }
    }

    .digital-contact {
      padding-top: 10px;
      span {
        margin-right: 10px;
      }
    }

    .icon {
      padding-top: 20px;
      width: 20px;
    }
  }

  @media screen and (max-width: 700px) {

      width: auto;
      height: 250px;
      clear: both;
      word-wrap: break-word;
    

    .footer-style {
      display: block;
      width: auto;
      margin: auto;
      min-height: 150px;
      text-align: center;
      padding: 0;
      .address {
        span:first-child {
          margin: 0;
          padding-top: 10px;
          margin-bottom: 10px;
        }
        span {
          margin-right: 0;
        }
      }
      .phones {
        span {
          display: block;
          margin-right: 0px;
        }
      }

      .digital-contact {
        padding-top: 10px;
        span {
          display: block;
          margin-right: 10px;
        }
      }

      .icon {
        padding-top: 20px;
        width: 20px;
      }
    }
  
`

export default Fotter
