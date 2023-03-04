import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    font-size: 1vmax;
    height: 100vh;
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: linear-gradient(
      180deg,
      var(--theme-color) 5%,
      var(--theme-color-complementary) 95%
    );
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--main-bg-color);
    font-family: "Play";
    color: black;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    z-index: -1;
    caret-color: transparent;
    --logo-font-color: rgba(40, 120, 150, 1);
    --alert-color-warning: rgba(255, 140, 140, 0.8);
    --alert-text-warning: rgba(0, 0, 0, 1);
    --alert-color-message: rgba(255, 250, 130, 0.8);
    --alert-text-message: rgba(0, 0, 0, 1);
    --alert-color-success: rgba(155, 240, 150, 0.8);
    --alert-text-success: rgba(10, 85, 0, 1);
    --main-bg-color: rgba(85, 100, 105, 0, 1);
    --theme-color: rgba(0, 80, 120, 0.6);
    --theme-color-complementary: rgba(220, 220, 220, 0.3);
    --theme-visionx-red: rgba(255, 0, 0, 1);
  }

  /* hides all scrollbars */
  ::-webkit-scrollbar {
    display: none !important;
  }

  hr {
    border: 0;
    margin: 1rem 0 0 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      red,
      rgba(255, 0, 0, 0)
    );
  }

  /* phone */
  @media (max-width: 600px) {
  }
  /* tablet portrait */
  @media (max-width: 900px) {
  }
  /* tablet landscape */
  @media (max-width: 1200px) {
  }
  /* desktop */
  @media (max-width: 1800px) {
  }
  /* >1800px = wide screen */
`;

const BasicLayout = ({ children }: { children: unknown }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
