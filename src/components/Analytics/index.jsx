import arrowdown from "../../assets/images/arrowdown.svg";
import cash from "../../assets/images/cash.svg";
import graficobtc from "../../assets/images/graficobtc.png";

import {
  Container,
  LicenseCard,
  Card,
  Dashboard,
  ContainerCards,
  ContainerHistory,
  Transactions,
} from "./style";

function Analytics() {
  return (
    <Container>
      <h2>Analytics</h2>
      <p className="license">
        licença Diamond <span>ativa</span>
      </p>
      <div className="containerHeader">
        <LicenseCard>
          <p className="tittleLicense">Diamond</p>
          <p className="licenseValue">$ 5000,00</p>
          <p className="tittleProgress">progresso</p>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
        </LicenseCard>
        <Card>
          <p className="tittle">Saldo Atual</p>
          <p className="value">$ 201,30</p>
          <div className="percentage">
            <span> ↑ 3,5%</span>
          </div>
        </Card>
        <Card>
          <p className="tittle">Disponivel para Saque</p>
          <p className="value">$ 120,20</p>
          <div className="percentage">
            <span> ↑ 2,5%</span>
          </div>
        </Card>
      </div>

      <Dashboard>
        <ContainerCards>
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
            <p className="safety">SmartBlockEx Safety</p>
          </Card>
          <Card>
            <p className="tittle">A determinar</p>
            <p className="value">$ 0</p>
          </Card>
          <Card>
            <p className="tittle">Próximo Saque</p>
            <p className="value">23/11/2025</p>
          </Card>
        </ContainerCards>
        <div className="btc">
          <img src={graficobtc} alt="" />
        </div>
      </Dashboard>
      <ContainerHistory>
        <div className="historyTittle">
          <h2>Histórico de Operações</h2>

          <div className="filter">
            <p>24h </p>
            <img src={arrowdown} alt="" />
          </div>
          <div className="transactions">
          <p>Band Protocol / USDT</p>
          <p>13,54% </p>
          </div>
          

        </div>

      </ContainerHistory>

    </Container>
  );
}

export default Analytics;
