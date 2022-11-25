import styled from "styled-components/native";

type ThemeType = typeof MyThemeType

declare module 'styled-components/native' {
    export interface NewTheme extends ThemeType {}
}