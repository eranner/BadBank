function Deposit(){
    const useEffect = React.useEffect
    const [show, setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')
    const [deposit, setDeposit] = React.useState('')
    const [disabled, setDisabled] = React.useState(true)
    // const [email, setEmail] = React.useState('')
    // const [password, setPassword] = React.useState('')
    const ctx = React.useContext(UserContext)
   // console.log([...ctx.users])

   useEffect(()=> {

    console.log(deposit)
    // validate(deposit)
   }, [deposit])

    console.log(deposit)
    function validate(field, label){
        if (!field) {
           
            
            setStatus("Please enter numeric values only")
            setTimeout(() => setStatus(''), 3000) 
            return false; 
        }
        // if (field > ctx.users[0].balance){
        //     setStatus("You do not have the sufficient funds to withdraw. Please try again")
        //     setTimeout(() => setStatus(''), 3000) 
        //     return false
        // }
        if (field < 0){
            setStatus(`Please enter positive numbers only`)
            setTimeout(() => setStatus(''), 3000) 
            setDeposit('')
            return false
        }
        

        return true;
    }
    if(isNaN(parseFloat(deposit)) && deposit !== '' && deposit !=='-' && deposit !=='.' && deposit !=='-.'){
        alert('Please enter numerical values only')
        setDeposit('')
    }

    // function checkForLetter(e){
    //     if(e.currentTarget.value <= '0' || e.currentTarget.value >= '9'){
    //         alert("Please enter numeric values only")
    //         setDeposit()
    //     } else return
    //     console.log(e.currentTarget.value)
    // }
    function clearForm(){
        setDeposit('')
        setShow(true)
        setDisabled(true)

    }
    const handleDeposit = () =>{
        // console.log(name, email, password)
        if (!validate(deposit, 'Please enter a deposit amount')) return;
        // if (!validate(email, 'email')) return;
        // if (!validate(password, 'password'))  return;
        // ctx.users.push({name, email, password, balance:100})

        setShow(false)
        console.log(deposit)
        console.log(typeof deposit)
        let total = ctx.users[0].balance
        let number = parseFloat(total).toFixed(2)
        let parsedNum = parseFloat(number)
        let newDeposit = parseFloat(deposit).toFixed(2)
        let parsedNewDeposit = parseFloat(newDeposit)
        parsedNum = parsedNum + parsedNewDeposit
        let finalDep = parseFloat(parsedNum).toFixed(2)
        console.log(number)
        ctx.users[0].balance= finalDep
        console.log(ctx.users[0].balance)
    }
// function checkNumber(character){
//     if(character <'0'|| character >'9' || character<0 || character >9){
//         alert('nope')
//     }
// }

    return(
        <Card
        bgcolor='success'
        header = "DEPOSIT"
        status = {status}
        body = {show ? (
            <>

<div style={{display: 'flex', gap: 20, justifyContent: 'space-between'}}>
            <h3 style={{ textShadow: '1px 1px #333'}}>Balance:</h3>
            <h3 style={{textShadow: '1px 1px #333', textAlign: 'right'}}>${ctx.users[0].balance}</h3>
            </div>

            <br/>
            <h3 style={{textShadow: '1px 1px #333'}}>Deposit Amount</h3>
            <input type='text' className="form-control" id='withdraw' value={deposit} min='0' style={{textAlign: 'right', fontSize: '1.5rem'}} onChange={(e)=> {setDeposit(e.currentTarget.value)
            setDisabled(false)}}/><br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <button type='submit' className='btn btn-dark' disabled={disabled} onClick={handleDeposit} style={{ fontSize: '2.5rem'}}>Deposit</button>
            </div>


            {/* <input type='number' className="form-control" id='deposit' min='0'value={deposit}onChange={e=> setDeposit(e.currentTarget.value)}/><br/>
            <button type='submit' className='btn btn-dark' onClick={handleDeposit}>Deposit</button> */}
            </>
        ): (
            <>
            <h5>Success</h5>
            <button type='submit' className='btn btn-dark' onClick={clearForm}>Add Another Deposit</button>
            </>
        )}
      
      />
    )
}