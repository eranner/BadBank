function CreateAccount(){
    const [show, setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [created, setCreated] = React.useState('CREATE ACCOUNT')
    const [disabled, setDisabled] = React.useState(true)
    const useEffect = React.useEffect
    const {userName, setUsername }= React.useContext(UserContext)
    const { userBalance, setUserBalance }= React.useContext(UserContext)
    const { isLoggedIn, setIsLoggedIn }= React.useContext(UserContext)

    function checkIfLoggedIn(){
        if(localStorage.getItem("token")){
            // console.log("yes")
            // setIsLoggedIn(true)
            // setShow(false)
            const firstLoginCheck = JSON.parse(localStorage.getItem("loggedIn"))
            setIsLoggedIn(firstLoginCheck)
            // console.log(userName)
        } else {
            setShow(true)
        }
    }
    useEffect(() => {
        checkIfLoggedIn();
        if(isLoggedIn == true){
          const newUserName = window.localStorage.getItem('token')
          const parsedUserInfo = JSON.parse(newUserName)
          // console.log(parsedUserInfo.userName)
          setUsername(parsedUserInfo.userName)
          setUserBalance(parsedUserInfo.userBalance.toFixed(2))
          // console.log(userName)
        }
      }, [isLoggedIn]);
    function validate(field, label){
        if (!field) {
            setStatus('Error '+ label)
            setTimeout(() => setStatus(''), 3000) 
            return false; 
            

        }

        if(password.length < 8){
            setStatus('Your password must be at least 8 characters long')
            setTimeout(() => setStatus(''), 3000) 
            return false; 

        }
            return true
    }
    function clearForm(){
        setName('')
        setEmail('')
        setPassword('')
        setShow(true)

    }

    const handleCreate = () =>{
        // console.log(name, email, password)
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password'))  return;
        const url = `/account/create/${String(name)}/${String(email)}/${String(password)}`;

        (async()=> {
            let res = await fetch(url)
            let data = await res.json()
            // console.log(data)
        })
        ();
        // ctx.users.push({name, email, password, balance:'100.00'})
        // setShow(false)
        clearForm()
        setCreated("Add Another Account")
        
        setTimeout(()=> {
            alert("Successfully Created Account")
        }, 200)

    }
    // const ctx = React.useContext(UserContext)

    return(
      <Card
        bgcolor='danger'
        header = "CREATE ACCOUNT"
        status = {status}
        body = {show ? (
            <>
            <br/>
            <input type='input' className="form-control" id='name' value={name} placeholder="NAME" onChange={e=>{
                setName(e.currentTarget.value)
                setDisabled(false)
            } }/><br/>
            
            <input type='input' className="form-control" id='email'value={email} placeholder="EMAIL" onChange={e=> {
                setEmail(e.currentTarget.value)
                setDisabled(false)}}/>
            <br/>
            <input type='password' className="form-control" id='password'value={password} placeholder="PASSWORD" onChange={e=>{
                    setPassword(e.currentTarget.value)
                    setDisabled(false)
            } }/><br/>
            <button type='submit' disabled={disabled} className='btn btn-dark'style={{fontSize: '2.5rem'}} onClick={handleCreate}>{created}</button>
            </>
        ): (
            <>
            <h5>Success</h5>
            <button type='submit' className='btn btn-dark'  onClick={clearForm}>Add Another Account</button>
            </>
        )}
      
      />
    )
}