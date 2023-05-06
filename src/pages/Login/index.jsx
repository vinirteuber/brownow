import Header from "../../components/Header";

function Login() {
  return (
    <>
      <div>
        <Header />
        <div className="all">
          <div className="container">
            <div className="title">
              <h1>Login</h1>
            </div>
            <div className="input-field">
              <div className="inp-log">
                <div className="label">
                  <label>E-mail ou CPF</label>
                </div>
                <input type="text" placeholder="insira seu email ou CPF" />
              </div>
              <h1>Cadastre-se</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
