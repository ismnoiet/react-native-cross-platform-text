declare const getFontStyleForWeight: (fontFamily?: string | undefined, fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined) => {
    fontFamily: string | undefined;
    fontWeight: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
} | {
    fontFamily?: undefined;
    fontWeight?: undefined;
};
export default getFontStyleForWeight;
