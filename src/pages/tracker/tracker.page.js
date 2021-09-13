import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/card.component";
import Header from "../../components/header/header.component";
import {
  getCryptoData,
  getCryptoIcons,
} from "../../redux/crypto/crypto.actions";
import "./tracker.style.scss";

const Tracker = () => {
  const dispatch = useDispatch();
  const [dataDisplay, setDataDisplay] = useState([]);
  const { cryptoList, error, loading } = useSelector((state) => state.cryptos);

  useEffect(() => {
    dispatch(getCryptoIcons());
    dispatch(getCryptoData());
  }, []);

  useEffect(() => {
    if (cryptoList) setDataDisplay(cryptoList);
  }, [cryptoList]);

  const deleteAction = (id) => {
    setDataDisplay(data => data.filter(d => d.id !== id))
  }

  return (
    <div className="tracker-page">
      <div className="tracker-container">
        <Header />
        {!loading && (
          <div className="scroll-container">
            {dataDisplay.map((data, i) => (
              <Card key={i} data={data} deleteAction={deleteAction}/>
            ))}
          </div>
        )}
        {loading && <div className="loading">Loading...</div>}
        {error && <div>Oops!!! Something wrong with our Apps.</div>}
        <button
          onClick={() => dispatch(getCryptoData())}
          className="refresh-btn"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default Tracker;
