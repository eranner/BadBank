function Balance(){
    // const ctx = React.useContext(UserContext)
    const useEffect = React.useEffect
    const [show, setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const fullDateTime = `${month}/${day}/${year} ${hour}:${minutes}:${seconds}`
    const {userBalance, setUserBalance} = React.useContext(UserContext)
    const {userName, setUsername} = React.useContext(UserContext)
    const { userEmail, setUserEmail } = React.useContext(UserContext)
    const updateBalance = JSON.parse(localStorage.getItem("usersBalance"))
    const { isLoggedIn, setIsLoggedIn }= React.useContext(UserContext)

    function loginStatusCheck () {
        if(localStorage.getItem('loggedIn')){
            const updatedLogin = JSON.parse(localStorage.getItem("loggedIn"))
            //   console.log("value of localStorage loggedIn" + updatedLogin)
              setIsLoggedIn(updatedLogin)
              const newUserName = window.localStorage.getItem('token')
              const parsedUserInfo = JSON.parse(newUserName)
            //   console.log(parsedUserInfo.userName)
            //   console.log(parsedUserInfo.userEmail)
              setUsername(parsedUserInfo.userName)
              setUserBalance(updateBalance)
              setUserEmail(parsedUserInfo.userEmail)
        }
    }

    function balanceCheck() {
        setUserBalance(updateBalance)
    }
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')
    // const ctx = React.useContext(UserContext)
   // console.log([...ctx.users])
useEffect(()=> {
    loginStatusCheck();
},[])
   useEffect(()=> {
    balanceCheck();
    // validate(deposit)
   }, [])
   if(localStorage.getItem('token')) {
    return(
        <Card
                bgcolor='primary'
                header = "BALANCE"
                status = {status}
                body = {show ? (
                    <>
                    <h3>{userName}'s Balance as of</h3> <h5>{fullDateTime} </h5>
                    <h4 style={{color: "green", textShadow: '1px 1px #333', fontWeight: "bold", backgroundColor:'#ffffffb2', borderRadius: '10px', width: '80%', textAlign: 'center', fontSize: '2.5rem' }}>${updateBalance}</h4>
                    </>
                ): (
                    <>
                    <h3>{userName}'s Balance as of {date}: </h3>
                    <h4>${userBalance}</h4>
                    <p>How can we help you?</p>
                    <a href="#/deposit/"><button type='submit' className='btn btn-success'  style={{marginBottom:"10px"}}>Make A Deposit</button></a>            
                    <a href="#/withdraw/"><button type='submit' className='btn btn-warning' style={{marginBottom:"10px"}} >Make A Withdraw</button></a>
                    <a href="#/balance/"><button type='submit' className='btn btn-primary' >Check My Balance</button></a>
                    </>
                )}
              
              />
            
        
            )
   }
    else {
        window.location.assign('/')
    }
}