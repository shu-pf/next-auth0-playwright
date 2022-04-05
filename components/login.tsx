import { useAuth0 } from "@auth0/auth0-react";

// ユーザを Auth0 Universal Login ページにリダイレクトさせるログインボタンを作成します。
// ユーザが認証に成功すると、このクイックスタートで以前に設定したコールバックURLにリダイレクトされます。
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <main>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </main>
    </div>
  );
};

export default LoginButton;
