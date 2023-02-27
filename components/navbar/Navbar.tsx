import React, { Component, ReactComponentElement } from "react";
import Image from "next/image";
import log_in_icon from "../../src/images/log_in.svg";
import log_out_icon from "../../src/images/log_out.svg";
import logo from "../../src/images/VisionX_Logo.svg";
import styled from "styled-components";
import { Modal } from "../modal/Modal";
import { useModal } from "../../utils/hooks/useModal";
import { LoginModal } from "./LoginModal";
import { useSession } from "next-auth/client";
import { signOut } from "next-auth/client";

const Navbar: React.FC<{}> = () => {
  const { isShown, toggle } = useModal();

  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  const [session, loading] = useSession();

  const handleSignOut = async () => {
    signOut({ redirect: false });
  };

  return (
    <NavMain>
      <ImageWraper data-testid="logo">
        <Image alt="logo" src={logo} layout="responsive" priority={true} />
      </ImageWraper>
      <ImageWraper data-testid="log_in_icon" onClick={toggle}>
        {session ? (
          <Image
            alt="log_out_icon"
            src={log_out_icon}
            layout="responsive"
            onClick={handleSignOut}
            priority={true}
          />
        ) : (
          <Image
            alt="log_in_icon"
            src={log_in_icon}
            layout="responsive"
            priority={true}
          />
        )}
      </ImageWraper>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText="Login"
        modalContent={<LoginModal onConfirm={onConfirm} onCancel={onCancel} />}
      />
    </NavMain>
  );
};

export default Navbar;

const NavMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem 0.7rem 2rem;
  z-index: 1;
  position: sticky;
  top: 0;
  background-color: rgba(51, 51, 51, 0.6);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
  font-size: 2rem;
  width: 100vw;

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

const ImageWraper = styled.div`
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.2));
  display: block;
  width: 50px;
  cursor: pointer;

  :hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.8));
  }
`;
