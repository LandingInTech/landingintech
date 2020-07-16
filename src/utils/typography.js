import Typography from 'typography'

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.61,
    headerFontFamily: ["Montserrat", "sans-serif"],
    bodyFontFamily: ["Montserrat", "sans-serif"],
    bodyWeight: 400,
    headerWeight: 700,
    boldWeight: 700,
    googleFonts: [
        {
        name: "Montserrat",
        styles: ["400", "500", "700"],
        },
    ],
    scaleRatio: 1.618,
})


export default typography