import React from "react";
import { useState , useRef} from "react";
import { Route , Routes , Link} from "react-router-dom";
import { 
Container, 
Screen,
Screen_Content,
Log,
Log_Field,
Log_Icon,
Log_Input,
Log_Submit,
Button_Icon,
Social_Login,
Social_Icons,
Social_Log_Icon,
Screen_Background,
Screen_Background_Shape1,
Screen_Background_Shape2,
Screen_Background_Shape3,
Screen_Background_Shape4
} from "./LoginStyle"

import App from "../Components/App"

const Login = () =>{

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [auth,setAuth] = useState(false);

    const getUserInfo = useRef(null);
    const getPasswordInfo = useRef(null);

    const handelSubmit = () => {
        setUsername(getUserInfo.current.value);
        setPassword(getPasswordInfo.current.value);
        setAuth(true);
    }

    return(
        <React.Fragment>
            <Container>
                <Screen>
                    <Screen_Content>
                        <Log>
                            <Log_Field>
                                <Log_Icon className="fas fa-user"></Log_Icon>
                                <Log_Input ref={getUserInfo} type="text" placeholder="ユーザネーム" ></Log_Input>
                            </Log_Field>
                            <Log_Field>
                                <Log_Icon className="fas fa-lock"></Log_Icon>
                                <Log_Input ref={getPasswordInfo} type="text" placeholder="パスワード"></Log_Input>
                            </Log_Field>
                            <Log_Submit className="button" onClick={handelSubmit}>
                                <span className="button__text">
                                        Log In Now
                                </span>
                                <Button_Icon className="fas fa-chevron-right"></Button_Icon>
                            </Log_Submit>
                        </Log>
                        <Social_Login>
                            <h3>log in via</h3>
                            <Social_Icons>
                                <Social_Log_Icon className="fab fa-instagram"></Social_Log_Icon>
                                <Social_Log_Icon className="fab fa-facebook"></Social_Log_Icon>
                                <Social_Log_Icon className="fab fa-twitter"></Social_Log_Icon>
                            </Social_Icons>
                        </Social_Login>
                    </Screen_Content>
                    <Screen_Background>
                        <Screen_Background_Shape1></Screen_Background_Shape1>
                        <Screen_Background_Shape2></Screen_Background_Shape2>
                        <Screen_Background_Shape3></Screen_Background_Shape3>
                        <Screen_Background_Shape4></Screen_Background_Shape4>
                    </Screen_Background>
                </Screen>
            </Container>
            {auth ? <App username={username} password={password} />:console.log("error auth")}
            {/* <Routes>
                <Route path="/app" element={<App />}/>
            </Routes> */}
        </React.Fragment>
    );
}

export default Login;