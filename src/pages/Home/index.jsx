import Logo from "../../assets/logo.png";
import Carrinho from "../../assets/carrinho.png";
import Conta from "../../assets/conta.png";
import Carrosel from "../../assets/Pascoa.png";




function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="O que você procura" />
        </div>

        <div className="list">
          <ul>
            <li>HOME</li>
            <li>PRODUTOS</li>
            <li>SOBRE NÓS</li>
          </ul>
        </div>

          <div className="itens">
            <div className="carrinho">
              <img src={Carrinho} alt="" />
            </div>
            <div className="conta">
              <img src={Conta} alt="" />
            </div>
          </div>

      </header>

      <main>
        <div className="banner">
          <img src={Carrosel} alt="" />
          </div>
      </main>
    <div className="all-cards">

      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
    </div>
    </>
  );
}

export default Home;
