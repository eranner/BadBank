function Spa() {
    return(
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users: [{name: "Joe Montana", email: 'montanaScarlet&Gold@gmail.com', password: 'goat4', balance: '3000.00'}]}}>
            <Route path='/' exact component={Home}></Route>
            <Route path='/CreateAccount/' component={CreateAccount}></Route>
            <Route path='/login/' component={Login}></Route>
            <Route path='/deposit/' component={Deposit}></Route>
            <Route path='/withdraw' component={Withdraw}></Route>
            <Route path='/balance/' component={Balance}></Route>
            <Route path='/alldata/' component={AllData}></Route>
            </UserContext.Provider>
        </HashRouter>
    )
}

ReactDOM.render(
    <Spa />,
    document.getElementById('root')

)