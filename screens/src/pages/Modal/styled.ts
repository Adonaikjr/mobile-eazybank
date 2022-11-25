import styled from 'styled-components/native'
import { MyThemeType } from '../../../../themes/MyTheme'

export const ContainerModal = styled.View`
height: 100%;
background-color: ${() => MyThemeType['secundary']};
`

export const Title = styled.Text`
font-size: 50px;
text-align: center;
color: ${() => MyThemeType['white']};
margin-top: 20px;
margin-bottom: 30px;
`
export const NewTitle = styled.Text`
color: ${() => MyThemeType['white']};
font-size: 25px;
width: 380px;
margin-left: 20px;
margin-top: 30px;
`
export const NewText = styled.Text`
margin-left: 20px;
margin-top: 10px;
padding-bottom: 30px;
color: ${() => MyThemeType['white']};
`
export const Content = styled.View`
    background-color: ${() => MyThemeType['black']};
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 30px;
    border-radius: 18px;
    margin-left: 10;
    margin-right: 10;

`
