import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
export interface FontStyleWrapperProps {
    children: (updatedStyle: StyleProp<TextStyle>) => React.ReactElement<{}>;
    style: StyleProp<TextStyle>;
}
declare const FontStyleWrapper: ({ style, children }: FontStyleWrapperProps) => React.ReactElement<{}>;
export default FontStyleWrapper;
