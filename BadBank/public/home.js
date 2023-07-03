function Home(){
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
    return(
      <Card 
        bgcolor='danger'
        txtcolor='white'
        // header="BadBank Landing Page"
        title = "WELCOME TO THE BANK"
        text= "For all your banking needs"
        body= {<img src='broken.svg' className='img-fluid' alt='responsive image'/>}
        
     />
    )
}