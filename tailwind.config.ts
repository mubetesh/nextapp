import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '50': '0.5'
       },
       backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
        '50': '0.5'
       },
       backgroundImage: {
         'herobg': "url('/public/images/9. DeLorean-Alpha-5 [DeLorean].webp')",
         'footer-texture': "url('/img/footer-texture.png')",
        }

    },
  },
  plugins: [],
};
export default config;
