/*
Copyright 2018 LendUp Global, Inc.
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
import { TextInput as ReactNativeTextInput } from "react-native";
import FontStyleWrapper from "./FontStyleWrapper";
const TextInput = (_a) => {
    var { style } = _a, props = __rest(_a, ["style"]);
    return (<FontStyleWrapper style={style}>
    {(fontStyle) => <ReactNativeTextInput style={fontStyle} {...props}/>}
  </FontStyleWrapper>);
};
export default TextInput;
//# sourceMappingURL=TextInput.js.map