import React from 'react'
import Child from './Child'

export default function Parent() {
    const users = [
        
        { name: "Daviti", lastname: "Mchedlishvili", age: 27, id: 1, },
        { name: "Harry", lastname: "Potter", age: 17, id: 2, },
        { name: "Harvey", lastname: "Specter", age: 45, id: 3, }
    ];
    
    // const isUserLoggedIn = false;
    const isUserLoggedIn = true;
    
    if(isUserLoggedIn){
        if(users.length === 0){
        return (
         <h1>There is no Users</h1>
        )
        } 
            return (
                    <>
            
                    {users.map((user) => {
                        return <Child 
                        loggedIn = {isUserLoggedIn}
                        users = {users}
                        name = {user.name}
                        lastname = {user.lastname}  
                        age = {user.age}
                        key={user.id} />
    
                    })}
    
                    </>
                    )
    }
        return <Child
        loggedIn = {isUserLoggedIn}
        />
    

    
    
    

    
}





