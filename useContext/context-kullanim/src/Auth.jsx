import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);
  console.log(status);
  return (
    <div>
      <h1>Giris Yaptin mi</h1>
      {status ? (
        <p>Giris Yapildi</p>
      ) : (
        <>
          <p>Hayir</p>
          <button onClick={login}>Giris yap</button>
        </>
      )}
    </div>
  );
}

export default Auth;
