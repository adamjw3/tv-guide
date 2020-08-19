import { css } from "styled-components";

const TypeStyles = css`
  .small-font {
    line-height: 150%;
    letter-spacing: 0.02em;
    font-size: 12px;

    @media ${(props) => props.theme.breakpoint.lg} {
      line-height: 167%;
      letter-spacing: 0.005em;
    }

    @media ${(props) => props.theme.breakpoint.xl} {
      line-height: 173%;
      letter-spacing: 0.01em;
      font-size: 15px;
    }
  }

  .medium-font {
    line-height: 130%;
    letter-spacing: 0.015em;
    font-size: 16px;

    @media ${(props) => props.theme.breakpoint.lg} {
      line-height: 128%;
      letter-spacing: 0.02em;
      font-size: 17px;
    }

    @media ${(props) => props.theme.breakpoint.xl} {
      line-height: 119%;
      letter-spacing: 0.015em;
      font-size: 22px;
    }

    @media ${(props) => props.theme.breakpoint.xxl} {
      font-size: 30px;
    }
  }

  .large-font {
    line-height: 117%;
    font-size: 24px;

    @media ${(props) => props.theme.breakpoint.sm} {
      font-size: 26px;
    }

    @media ${(props) => props.theme.breakpoint.md} {
      line-height: 110%;
      font-size: 37px;
    }

    @media ${(props) => props.theme.breakpoint.lg} {
      line-height: 110%;
      font-size: 47px;
    }

    @media ${(props) => props.theme.breakpoint.xl} {
      line-height: 107%;
      font-size: 59px;
    }

    @media ${(props) => props.theme.breakpoint.xxl} {
      line-height: 107%;
      font-size: 72px;
    }
  }
`;

export default TypeStyles;
