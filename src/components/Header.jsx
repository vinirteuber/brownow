import Logo from "../assets/logo.png";
import Carrinho from "../assets/carrinho.png";
import Conta from "../assets/conta.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="search">
        <input type="text" placeholder="O que você procura" />
      </div>

      <div className="list">
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <li>PRODUTOS</li>
          <li>SOBRE NÓS</li>
        </ul>
      </div>

      <div className="itens">
        <div className="carrinho">
          <img src={Carrinho} alt="" />
        </div>
        <Link to="/login">
          <div className="conta">
            <img src={Conta} alt="" />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
