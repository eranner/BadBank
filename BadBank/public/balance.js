function Balance(){
    const ctx = React.useContext(UserContext)
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
    
    return(
<Card
        bgcolor='primary'
        header = "BALANCE"
        status = {status}
        body = {show ? (
            <>
            <h3>Balance as of</h3> <h5>{fullDateTime} </h5>
            <h4 style={{color: "green", textShadow: '2px 2px #333', fontWeight: "bold", backgroundColor:'#ffffffb2', borderRadius: '10px', width: '60%', textAlign: 'center' }}>${ctx.users[0].balance}</h4>
            </>
        ): (
            <>
            <h3>Balance as of {date}: </h3>
            <h4>${ctx.users[0].balance}</h4>
            <p>How can we help you?</p>
            <a href="#/deposit/"><button type='submit' className='btn btn-success'  style={{marginBottom:"10px"}}>Make A Deposit</button></a>            
            <a href="#/withdraw/"><button type='submit' className='btn btn-warning' style={{marginBottom:"10px"}} >Make A Withdraw</button></a>
            <a href="#/balance/"><button type='submit' className='btn btn-primary' >Check My Balance</button></a>
            </>
        )}
      
      />
    

    )
}