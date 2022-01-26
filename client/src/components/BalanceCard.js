import { rupiah } from "../helpers/currencyFormatter";

const BalanceCard = ({ name, balance }) => {
  return (
    <div>
      <div className="card-group">
        <div className="cardWallet">
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png"
              alt="Visa"
            />
          </div>
          <div className="chip">
            <img
              src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png"
              alt="chip"
            />
          </div>
          <div className="number">{rupiah(balance)}</div>
          <div className="name">{name}</div>
          <div className="ringCard"></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
