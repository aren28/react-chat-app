import React from 'react';

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const Screen = styled.div`
    background: linear-gradient(90deg, #5D54A4, #7C78B8);		
	position: relative;	
	max-height: 600px;
	height: 100%;
	max-width: 360px;
	width: 100%;
	box-shadow: 0px 0px 24px #5C5696;
`;

export const Screen_Content = styled.div`
    z-index: 1;
	position: relative;	
	height: 100%;
`;

export const Log = styled.form`
	width: 320px;
	padding: 30px;
	padding-top: 156px;
`;

export const Log_Field = styled.div`
	padding: 20px 0px;	
	position: relative;	
`;

export const Log_Icon = styled.i`
	position: absolute;
	top: 30px;
	color: #7875B5;
`;

export const Log_Input = styled.input`
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
    :active,
    :focus,
    :hover{
        outline: none;
        border-bottom-color: #6A679E;
    }
`;

export const Log_Submit = styled.div`
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
    :active,
    :focus,
    :hover{
        border-color: #6A679E;
        outline: none;
    }
`;

export const Button_Icon = styled.div`
	font-size: 24px;
	margin-left: auto;
	color: #7875B5;
`;

export const Social_Login = styled.div`
	position: absolute;
	height: 140px;
	width: 160px;
	text-align: center;
	bottom: 0px;
	right: 0px;
	color: #fff;
`;

export const Social_Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Social_Log_Icon = styled.a`
	padding: 20px 10px;
	color: #fff;
	text-decoration: none;	
	text-shadow: 0px 0px 8px #7875B5;
    :hover{
        transform: scale(1.5);	
    }
`;

export const Screen_Background = styled.div`
    position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 0;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);	
`;

export const Screen_Background_Shape = styled.div`
    transform: rotate(45deg);
	position: absolute;
	@media (max-width:500px){
		height: 390px;
		width: 82px;
		background: linear-gradient(270deg,#5D54A4,#6A679E);
		top: 77px;
		right: 86px;
	}
`;

export const Screen_Background_Shape1 = styled(Screen_Background_Shape)`
    height: 520px;
	width: 520px;
	background: #FFF;	
	top: -50px;
	right: 120px;	
	border-radius: 0 72px 0 0;
`;

export const Screen_Background_Shape2 = styled(Screen_Background_Shape)`
	height: 220px;
	width: 220px;
	background: #6C63AC;	
	top: -172px;
	right: 0;	
	border-radius: 32px;
`;

export const Screen_Background_Shape3 = styled(Screen_Background_Shape)`
	height: 540px;
	width: 190px;
	background: linear-gradient(270deg, #5D54A4, #6A679E);
	top: -24px;
	right: 0;	
	border-radius: 32px;
	@media (max-width:500px){
		height: 306px;
		width: 82px;
		background: linear-gradient(270deg,#5D54A4,#6A679E);
		top: 128px;
		right: 86px;
	}
`;

export const Screen_Background_Shape4 = styled(Screen_Background_Shape)`
	height: 400px;
	width: 200px;
	background: #7E7BB9;	
	top: 420px;
	right: 50px;	
	border-radius: 60px;
	@media (max-width:500px){
	height: 399px;
    width: 131px;
    background: #7E7BB9;
    top: 420px;
    right: 127px;
    border-radius: 60px;
	}
`;