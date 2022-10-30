import React from "react";
import { useState , useRef, createContext} from "react";
import { useNavigate } from "react-router-dom";
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

export const UserInfo = createContext();

const Login = () =>{

    const history = useNavigate();

    const getUserInfo = useRef(null);
    const getPasswordInfo = useRef(null);

    const handelSubmit = () => {
        const UserUser = getUserInfo.current.value;
        const PassPass = getPasswordInfo.current.value;
        localStorage.setItem('username', JSON.stringify(UserUser));
        localStorage.setItem('password', JSON.stringify(PassPass));
        history("/app");
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
        </React.Fragment>
    );
}

export default Login;