import type { NextPage } from "next";
import Head from "next/head";
import LoginButton from "components/login";
import LogoutButton from "components/logout";
import { useAuth0 } from "@auth0/auth0-react";

const Home: NextPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <Head>
        <title>トップページ</title>
      </Head>
      <main>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
        {isAuthenticated ? (
          <div>
            <h2>Hi! {user?.name}</h2>
          </div>
        ) : (
          <div>
            <h2>Please Login</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
