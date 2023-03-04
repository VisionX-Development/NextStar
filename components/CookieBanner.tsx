import Link from "next/link";
import styled from "styled-components";
import { useStoreActions } from "../store/GlobalState";
import Cookies from "universal-cookie";

const CookieBanner = (): JSX.Element => {
  const setCookieConsent = useStoreActions((state) => state.setCookieConsent);

  const setCookieBanner = useStoreActions((state) => state.setCookieBanner);

  const setCookie = () => {
    //set and Accept_Cookies_VisionX Cookie
    const cookies = new Cookies();
    cookies.set("StaR_Privacy", true, {
      path: "/",
      maxAge: 15768000,
    });
  };

  const handleCookieAccept = () => {
    setCookie();
    setCookieBanner(false);
    setCookieConsent(true);
  };

  const handleCookieRejection = () => {
    setCookieBanner(false);
  };

  return (
    <CookieWrapper>
      <h1 data-testid="cookie warning"> Cookies verbessern die Darstellung</h1>
      <div className="link">
        <Link href="/">Infos zum Datenschutz</Link>
      </div>
      <button onClick={handleCookieAccept}>Akzeptieren</button>
      <button onClick={handleCookieRejection}>Ablehnen</button>
    </CookieWrapper>
  );
};

export default CookieBanner;

const CookieWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.8);
  background: rgba(24, 24, 24, 0.4);
  text-align: center;
  color: black;
  text-decoration: none;
  margin: 1vmax;
  z-index: 1;
  position: sticky;
  bottom: 0;
  letter-spacing: 0.2rem;
  width: 100vw;
  font-size: 1 rem;

  h1 {
    font-size: 2vmax;
    font-weight: bold;
    margin: 1vmax;
  }

  button {
    border: 1px solid black;
    border-radius: 10px;
    height: 4vmax;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.6);
    background: rgba(95, 95, 95, 0.4);
    color: black;
    font-size: 1.5vmax;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    font-weight: bold;
    margin: 1vmax;

    :active {
      outline: none;
      padding: 1.2rem 0 0.8rem 0;
      box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1) !important;
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0) !important;
    }

    :focus {
      outline: none;
    }

    :hover {
      box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
      background: rgba(95, 95, 95, 0.6);
      cursor: pointer;
    }
  }

  .link a {
    font-size: 1.5vmax;
    color: black;
    text-decoration: none;
  }

  // phone
  @media (max-width: 600px) {
  }
  // tablet portrait
  @media (max-width: 900px) {
  }
  // tablet landscape
  @media (max-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;
