import React from "react";
import Logo from "../images/faviconReal.png";
import Eth from "../images/eth.svg";
import { Link } from "react-router-dom";

// import { useAccount, useConnect, useEnsName } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";

function Header(props) {
  const { address, isConnected, connect } = props;
  // const { data: ensName } = useEnsName({ address });
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // });

  //console.log(connect, address, isConnected, "address");

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={() => connect()}>
          <>
            {isConnected
              ? `${address.slice(0, 4)}...${address.slice(38)}`
              : "Connect Wallet"}
          </>
        </div>
      </div>
    </header>
  );
}

export default Header;
