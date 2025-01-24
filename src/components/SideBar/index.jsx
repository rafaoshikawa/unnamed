import { Container, ButtonSideBar } from "./style";
import logo from "../../assets/images/contactUs.svg";
import analytics from "../../assets/images/analytics.svg";
import products from "../../assets/images/products.svg";
import costumers from "../../assets/images/costumers.svg";
import news from "../../assets/images/news.svg";
import settings from "../../assets/images/settings.svg";
import logout from "../../assets/images/logout.svg";
function SideBar() {
  return (
    <Container>
      <h1>SmartBlock</h1>
      <ButtonSideBar href=""> <img src={analytics} alt="" /> Analytics</ButtonSideBar>
      <ButtonSideBar href=""><img src={products} alt="" />Products</ButtonSideBar>
      <ButtonSideBar href=""><img src={news} alt="" />News</ButtonSideBar>
      <ButtonSideBar href=""><img src={costumers} alt="" />Costumers</ButtonSideBar>

      <div className="settings">
        <ButtonSideBar href="" className="settingsStyle"><img src={settings} alt="" />Settings</ButtonSideBar>
        <ButtonSideBar href=""><img src={logout} alt="" />Sign out</ButtonSideBar>
      </div>
     <a href="" className="contactUs"><img src={logo} alt="" /></a>
    </Container>
  );
}

export default SideBar;
