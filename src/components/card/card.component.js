import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./card.style.scss";

const Card = ({ data, deleteAction = () => {} }) => {
  const [icon, setIcon] = useState("");
  const { icons } = useSelector((state) => state.cryptos);

  useEffect(() => {
    if (icons) {
      const ico = icons.filter((icon) => icon.id === data.slug)[0];
      setIcon(ico);
    }
  }, [icons, data.slug]);

  return (
    <div className="crypto-card">
      <img className="card-logo" src={icon?.icon} alt="logo-a" />
      <div className="card-text">
        <p className="name">{data.name}</p>
        <p className="code">{data.symbol}</p>
      </div>
      <div className="card-value">
        <div className="price">
          ${data.metrics.market_data.price_usd.toFixed(2)}
        </div>
        <div
          className={`percentage ${
            data.metrics.market_data.percent_change_usd_last_24_hours > 0
              ? "up"
              : "down"
          }`}
        >
          {data.metrics.market_data.percent_change_usd_last_24_hours?.toFixed(
            2
          )}
          %
        </div>
        <button className="delete-btn" onClick={() => deleteAction(data.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
