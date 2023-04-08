function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <div className='navbar-nav'>
          <NavLink className="navbar-brand" to="/" style={{ color: 'red', backgroundColor: 'transparent' }} id='mainPage'>BadBank</NavLink>
          </div>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '30%' }}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create a new account" className="nav-link" to="/CreateAccount" style={{ color: 'white' }}>Create Account</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/login" style={{ color: 'white', marginLeft: '30px' }}>Login</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make an account deposit"className="nav-link" to="/deposit" style={{ color: 'white', marginLeft: '30px' }}>Deposit</NavLink>
              </li>
              <li className="nav-item">
                <NavLink data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a withdraw"className="nav-link" to="/withdraw" style={{ color: 'white', marginLeft: '30px' }}>Withdraw</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/balance" style={{ color: 'white', marginLeft: '30px' }}>Balance</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink data-bs-toggle="tooltip" data-bs-placement="bottom" title="Get a list of all users"className="nav-link" to="/alldata" style={{ color: 'white', marginLeft: '30px' }}>AllData</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


// <a href='#'>BadBank</a>,
// <a href='#/CreateAccount/'>Create Account</a>,
// <a href='#/login/'>Login</a>,
// <a href='#/deposit/'>Deposit</a>,
// <a href='#/withdraw/'>Withdraw</a>,
// <a href='#/balance/'>Balance</a>,
// <a href='#/alldata/'>AllData</a>