import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../src/images/StaR_Logo.svg";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <IndexWraper>
      <Link href="/">
        <ImageWraper>
          <Image
            alt="Logo"
            src={Logo}
            width={300}
            height={300}
            priority={true}
          />
        </ImageWraper>
      </Link>
      <h1>404</h1>
      <div className="subtitel">Seite existiert nicht (mehr)</div>
      <Link href="/">Zurück zur App</Link>
    </IndexWraper>
  );
};

const IndexWraper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;

  @media screen and (min-width: 100vh) {
    /* The width is greater than the height */
  }

  h1 {
    font-size: 7vmax;
    margin: 0;
  }

  a {
    color: black;
    font-size: 2vmax;
    text-decoration: none;
    padding: 0.5rem 2rem 0.5rem 2rem;

    :hover {
      filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.6));
    }
  }

  .subtitel {
    font-size: 4vmax;
    letter-spacing: 0.4rem;
    margin: 2rem;
  }

  // phone
  @media (max-width: 600px) {
    .subtitel {
      font-size: 3vmax;
      letter-spacing: 1.2rem;
      margin: 2rem;
    }
  }

  // tablet portrait
  @media (min-width: 601px) and (max-width: 900px) {
    .subtitel {
      font-size: 5vmax;
      letter-spacing: 1.3rem;
      margin: 2rem;
    }
  }

  // tablet landscape
  @media (min-width: 1200px) {
  }
  // desktop
  @media (max-width: 1800px) {
  }
  // >1800px = wide screen
`;

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  display: block;
  cursor: pointer;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
  }
`;

export default ErrorPage;
