import styled from 'styled-components/native'

import { MyThemeType } from '../../../../themes/MyTheme'

export const ContainerDashboard = styled.View`
//background-color: ${() => MyThemeType['white']};
width: 100%;
height: 100%;

`
export const BackgroundIamge = styled.Image`
background-position: center;
background-size: cover;

height: 400px;
width: 100%;


`
export const NewContainerButton = styled.View`
height: 50px;
border-radius: 50%;
justify-content: center;
align-items: center;
color: black;
margin: 30px 80px 0px 80px;
background-color: ${() => MyThemeType['gray']};

`
export const ButtonText = styled.Text`

width: 240px;
text-align: center;
`

export const NewText = styled.Text`
font-size: 18px;
text-align: center;
color: ${() => MyThemeType['white']};
margin-top: 20px;
margin-left: 10px;
margin-right: 10px;

`
export const Title = styled.Text`
font-size: 50px;
margin-top: 20px;
text-align: center;
color: ${() => MyThemeType['white']};
margin-bottom: 25px;
`

export const Cover = styled.View`
margin-top: -400px;
`

export const ContainerContent = styled.View`
    margin-top: 90px;
    background-color: ${() => MyThemeType['primary']};
    padding-bottom: 100px;
    padding-top: 50px;
`

export const CoverOnline = styled.View`
    align-items: center;
    margin-top: 50px;

`
export const NewTitle = styled(Title)`
    font-size: 25px;
`