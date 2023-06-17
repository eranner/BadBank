function Login(){
    const ctx = React.useContext(UserContext)
    const useEffect = React.useEffect
    const [show, setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    console.log(ctx)
    function handleLogin() {
        if(email === ctx.users[0].email && password === ctx.users[0].password){
            console.log('success')
            clearForm()
        } else {
            console.log('failed')
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
            <h5>Welcome back {ctx.users[0].name}!</h5>
            <p>How can we help you?</p>
            <a href="#/deposit/"><button type='submit' className='btn btn-success'  style={{marginBottom:"10px"}}>Make A Deposit</button></a>            
            <a href="#/withdraw/"><button type='submit' className='btn btn-warning' style={{marginBottom:"10px"}} >Make A Withdraw</button></a>
            <a href="#/balance/"><button type='submit' className='btn btn-primary' >Check My Balance</button></a>
            </>
        )}
      
      />
    

    )
}