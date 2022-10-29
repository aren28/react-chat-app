import React from "react";
import { 
    ChatEngine
} from "react-chat-engine";

const App = (props) =>{
    const username = props.username;
    const password = props.password;
    return(
        <ChatEngine
            height='100vh'
			userName={username.toString()}
			userSecret={password.toString()}
			projectID='15b0977e-d6bb-4fdd-a222-d03eb7a2c61c'
		/>  
    )
}

export default App;