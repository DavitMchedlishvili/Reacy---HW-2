import React from 'react'

export default function Child(props) {
   
    if(props.loggedIn){
        return (
        
      
            < h1 > {props.name} {props.lastname} {props.age}</h1 >
    
    
        )
    
    }else {
        return (
            <h1>you are not authorized to see user list.</h1>
        )
    }
    

}

