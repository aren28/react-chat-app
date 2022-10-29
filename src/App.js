import React from "react";
import { 
    ChatEngine, 
    ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine'

const App = () =>{
    return(
        <ChatEngine
            height='100vh'
			userName='romerallene2828'
			userSecret='123123'
			projectID='15b0977e-d6bb-4fdd-a222-d03eb7a2c61c'
		/>  
    )
}

export default App;