function AllData(){
    const ctx = React.useContext(UserContext)
    const profiles = [...ctx.users]
    console.log(profiles)
    return(
        <>
        <h1>ALL DATA<br/>
       
        </h1>
        <div className="container"style={{maxWidth: '90%'}}>
        <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
    
    </tr>
  </thead>
  <tbody>
   
        { profiles.map((profile) => 
             <tr>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.password}</td>
            </tr>
        )}

    
  </tbody>
</table>
        
</div>
        </>

    )
}