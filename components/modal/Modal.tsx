import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import FocusLock from "react-focus-lock";
import close_icon from "../../src/images/close_white.svg";
import Image from "next/image";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const onKeyDown = (event: KeyboardEvent) => {
    if (["Escape"].includes(event.key) && isShown) {
      hide();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  useEffect(() => {
    isShown
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [isShown]);

  const modal = (
    <React.Fragment>
      <Backdrop onClick={hide} />
      <FocusLock>
        <Wrapper
          aria-modal
          aria-labelledby={headerText}
          tabIndex={-1}
          role="dialog"
        >
          <StyledModal>
            <Header>
              <HeaderText>{headerText}</HeaderText>
              <CloseButton
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <Image
                  alt="close_icon"
                  src={close_icon}
                  width={30}
                  height={30}
                />
              </CloseButton>
            </Header>
            <Content>{modalContent}</Content>
          </StyledModal>
        </Wrapper>
      </FocusLock>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(24, 24, 24, 0.6);
  z-index: 500;
`;

const StyledModal = styled.div`
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  position: relative;
  margin: auto;
  border-radius: 8px;

  .evfTIp {
    max-height: unset;
  }
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const HeaderText = styled.div`
  align-self: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  padding: 0.5rem;
`;

const CloseButton = styled.button`
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
