function Login(){
    const useEffect = React.useEffect
    const [show, setShow] = React.useState(true)
    // const [status, setStatus] = React.useState('loggedOut')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    // const {checkLoggedIn} = require('../auth.js')
    // checkIfLoggedIn()
    // if(status === 'loggedOut'){
    //     checkIfLoggedIn();
    // }

    useEffect(() => {
        checkIfLoggedIn();
      }, []);
    // console.log(ctx)/
    // const isLoggedIn = checkLoggedIn();
    // console.log(checkLoggedIn())
    function handleLogin() {
        const url = `/account/login/${encodeURIComponent(email)}/${encodeURIComponent(password)}`;
        
        (async () => {
          try {
            const res = await fetch(url);
            if (res.status === 200) {
              const data = await res.json();
              console.log(data.token);
              localStorage.setItem("token", data.token)
              localStorage.setItem("name", data.name)
              localStorage.setItem("balance", data.balance)
        checkIfLoggedIn()
        // setStatus('loggedIn')

              // Save the token or perform any other action
            } else {
              console.log('Login failed:', res.statusText);
            }
          } catch (error) {
            console.error('An error occurred during login:', error);
          }
        })();
      }
      
    function checkIfLoggedIn(){
        if(localStorage.getItem("token")){
            console.log("yes")
            setShow(false)
        } else {
            setShow(true)
        }
    }
    function clearForm(){
        setEmail('')
        setPassword('')
        setShow(false)

    }
    return(
<Card
        bgcolor='secondary'
        header = "LOGIN"
        status = {status}
        body = {show ? (
            <>
            <br/>
            
            <input type='input' className="form-control" id='email'value={email} placeholder="EMAIL" onChange={e=> {
                setEmail(e.currentTarget.value)
                console.log(email)}}/>
            <br/>
            <input type='password' className="form-control" id='password'value={password} placeholder="PASSWORD" onChange={e=>{
                    setPassword(e.currentTarget.value)
            } }/><br/>
            <button type='submit' className='btn btn-dark'style={{fontSize: '2.5rem'}} onClick={handleLogin}>Login</button>
            </>
        ): (
            <>
            {/* <h5>Welcome back {ctx.users[0].name}!</h5> */}
            <p>How can we help you?</p>
            <a href="#/deposit/"><button type='submit' className='btn btn-success'  style={{marginBottom:"10px"}}>Make A Deposit</button></a>            
            <a href="#/withdraw/"><button type='submit' className='btn btn-warning' style={{marginBottom:"10px"}} >Make A Withdraw</button></a>
            <a href="#/balance/"><button type='submit' className='btn btn-primary' >Check My Balance</button></a>
            </>
        )}
      
      />
    

    )
}