import { Container, ButtonSideBar } from "./style";
import analytics from "../../assets/images/analytics.svg";
import products from "../../assets/images/products.svg";
import costumers from "../../assets/images/costumers.svg";
import news from "../../assets/images/news.svg";
import settings from "../../assets/images/settings.svg";
import logout from "../../assets/images/logout.svg";
import brazil from "../../assets/images/brazil.svg";
import portugal from "../../assets/images/portugal.svg";
import usa from "../../assets/images/usa.svg";
function SideBar() {
  return (
    <Container>
      <h1>SmartBlock</h1>
      <div className="flags">
        <img src={brazil} alt="" />
        <img src={portugal} alt="" />
        <img src={usa} alt="" />
      </div>

      <ButtonSideBar href="">
        {" "}
        <img src={analytics} alt="" /> Analytics
      </ButtonSideBar>
      <ButtonSideBar href="">
        <img src={products} alt="" />
        Products
      </ButtonSideBar>
      <ButtonSideBar href="">
        <img src={news} alt="" />
        News
      </ButtonSideBar>
      <ButtonSideBar href="">
        <img src={costumers} alt="" />
        Costumers
      </ButtonSideBar>

      <div className="settings">
        <ButtonSideBar href="" className="settingsStyle">
          <img src={settings} alt="" />
          Settings
        </ButtonSideBar>
        <ButtonSideBar href="">
          <img src={logout} alt="" />
          Sign out
        </ButtonSideBar>
      </div>
     
    </Container>
  );
  ("");
}

export default SideBar;
