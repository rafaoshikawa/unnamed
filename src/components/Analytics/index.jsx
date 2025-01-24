import {
  Container,
  CardsContainer,
  Header,
  ProfitCard,
  Tittle,
  Values,
  Percentage,
  Funds,
  Group,
  HistoryContainer,
} from "./style";
import boy from "../../assets/images/boy.png";
import arrowup from "../../assets/images/arrowup.svg";
import cash from "../../assets/images/cash.svg";
import wallet from "../../assets/images/wallet.svg";
import History from "../History";

function Analytics() {
  return (
    <Container>
      <Header>
        <h2>Analytics</h2>
        <div className="profile">
          <img src={boy} alt="" />
          <p>Chris B.</p>
        </div>
      </Header>

      <CardsContainer>
        <ProfitCard>
          <Tittle>
            <p>Profit Balance</p>
            <div>
              <img src={wallet} alt="" />
            </div>
          </Tittle>
          <Values>$1242,27</Values>
          <Percentage>
            <span>
              <img src={arrowup} alt="" />
              3,82%
            </span>
          </Percentage>
        </ProfitCard>
        <Funds>
          <Tittle>
            <p>Funds Received</p>
            <div>
              <img src={cash} alt="" />
            </div>
          </Tittle>
          <Values>$511,47</Values>
        </Funds>
        <Group>
          <Tittle>
            <p>Funds Received</p>
            <div>
              <img src={cash} alt="" />
            </div>
          </Tittle>
          <Values>$232,47</Values>
        </Group>

      </CardsContainer>
<HistoryContainer>
<History />

</HistoryContainer>
    </Container>
  );
}

export default Analytics;
