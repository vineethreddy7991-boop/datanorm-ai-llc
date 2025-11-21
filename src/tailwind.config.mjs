/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "400" }],
                sm: ["0.875rem", { lineHeight: "1.25", letterSpacing: "0.02em", fontWeight: "400" }],
                base: ["1rem", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
                lg: ["1.125rem", { lineHeight: "1.75", letterSpacing: "-0.01em", fontWeight: "400" }],
                xl: ["1.25rem", { lineHeight: "1.75", letterSpacing: "-0.01em", fontWeight: "500" }],
                "2xl": ["1.5rem", { lineHeight: "2", letterSpacing: "-0.02em", fontWeight: "600" }],
                "3xl": ["1.875rem", { lineHeight: "2.25", letterSpacing: "-0.02em", fontWeight: "700" }],
                "4xl": ["2.25rem", { lineHeight: "2.5", letterSpacing: "-0.02em", fontWeight: "700" }],
                "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "800" }],
                "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
                "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "900" }],
                "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "900" }],
                "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "900" }],
            },
            fontFamily: {
                heading: ["space grotesk"],
                paragraph: ["roboto"]
            },
            colors: {
                "neon-teal": "#00FFC6",
                "deep-space-blue": "#0A192F",
                "light-gray": "#E0E0E0",
                "dark-gray": "#0A192F",
                "medium-gray": "#0A192F",
                "accent-purple": "#007BFF",
                "accent-cyan": "#007BFF",
                "accent-emerald": "#007BFF",
                destructive: "#DC3545",
                "destructive-foreground": "#FFFFFF",
                background: "#000000",
                secondary: "#6C757D",
                foreground: "#FFFFFF",
                "secondary-foreground": "#FFFFFF",
                "primary-foreground": "#FFFFFF",
                primary: "#00FFC6",
                textprimary: "#FFFFFF",
                forgrounde: "#FFFFFF",
                textsecondary: "#E0E0E0",
                "pastel-pink": "#E0E0E0",
                "bright-blue": "#007BFF",
                "soft-gray": "#E0E0E0",
                destructiveforeground: "#FFFFFF",
                accentpeach: "#FFFFFF",
                accentneongreen: "#00FFC6",
                "dark-background": "#000000"
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
