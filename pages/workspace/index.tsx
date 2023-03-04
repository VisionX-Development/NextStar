import type { NextPage } from "next";
import { getSession } from "next-auth/client";
import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";

const Workspace: NextPage = () => {
  return (
    <WorkspaceWrapper>
      <Navbar />
      <Link href="/">
        <div className="titel">Back Home</div>
      </Link>
    </WorkspaceWrapper>
  );
};

const WorkspaceWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Workspace;
