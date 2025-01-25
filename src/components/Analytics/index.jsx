import boy from "../../assets/images/boy.png";
import cash from "../../assets/images/cash.svg";
import graficobtc from "../../assets/images/graficobtc.png";

import {
  Container,
  LicenseCard,
  Card,
  Dashboard,
  ContainerCards,
} from "./style";

function Analytics() {
  return (
    <Container>
      <h2>Analytics</h2>
      <p className="license">
        licença Diamond <span>ativa</span>
      </p>
      <LicenseCard>
        <p className="tittleLicense">Diamond</p>
        <p className="licenseValue">$ 5000,00</p>
        <p className="tittleProgress">progresso</p>
        <div class="progress">
          <div class="progress-bar"></div>
        </div>
      </LicenseCard>
      <Dashboard>
        <ContainerCards>
          <Card>
            <p className="tittle">Saldo atual</p>
            <p className="value">$ 201,30</p>
            <div className="percentage">
              <span> ↑ 3,5%</span>
            </div>
          </Card>
          <Card>
            <p className="tittle">Lucro Acumulado</p>
            <p className="value">$ 1001,30</p>
          </Card>
          <Card>
            <p className="tittle">Rendimento Diário</p>
            <p className="value">$ 20,20</p>
            <div className="percentage">
              <span> ↑ 2,5%</span>
            </div>
          </Card>
          <Card>
            <p className="tittle">Disponivel para Saque</p>
            <p className="value">$ 120,20</p>
            <div className="percentage">
              <span> ↑ 2,5%</span>
            </div>
          </Card>
        </ContainerCards>
        <div className="btc">
          <img src={graficobtc} alt="" />
        </div>
      </Dashboard>
    </Container>
  );
}

export default Analytics;
