import { NavLink } from 'react-router-dom';

function Mainlayout() {

  let connected = false;
  let installed = false;

  function isMetaMaskInstalled() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }

  async function isMetaMaskConnected() {
    const {ethereum} = window;
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    return accounts[0];
  }

  async function initialize(){
    connected = await isMetaMaskConnected();
    installed = isMetaMaskInstalled();
  }

  const clickToConnect = async function(){
    try{
      initialize();
      if(installed){
        console.log("Metamask is installed");
        const account = await isMetaMaskConnected();
        console.log(account);
        // console.log(accounts[0]);
      }
    }catch(err){
      console.log(err);
    }
  }

  const clickToDisConnect = function(){
      if(connected){
        window.ethereum.on('disconnect',async()=>{
          initialize();
        })
      }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Charity Platform</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/donation">Donation</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
              <div align="left" className="position-relative">
                {connected?
                <button onClick={clickToDisConnect}>Disconnect</button>:
                <button onClick={clickToConnect}>Connect to MetaMask</button>}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Mainlayout;