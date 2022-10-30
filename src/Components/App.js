import React from "react";
import { 
    ChatEngine
} from "react-chat-engine";

const App = () =>{
    const username = JSON.parse(localStorage.getItem('username'));
    const password = JSON.parse(localStorage.getItem('password'));
    return(
        <ChatEngine
            height='100vh'
			userName={username}
			userSecret={password}
			projectID='15b0977e-d6bb-4fdd-a222-d03eb7a2c61c'
		/>  
    )
}

export default App;