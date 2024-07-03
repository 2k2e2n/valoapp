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
        'result':  "url('/images/Default/DefaultIMG.webp')",
        'ascent':   "url('/images/Result/ASCENT.png')",
        'bind':     "url('/images/Result/BIND.png')",
        'breeze':   "url('/images/Result/BREEZE.png')",
        'fracture': "url('/images/Result/FRACTURE.png')",
        'haven':    "url('/images/Result/HAVEN.png')",
        'icebox':   "url('/images/Result/ICEBOX.png')",
        'lotus':    "url('/images/Result/LOTUS.png')",
        'pearl':    "url('/images/Result/PEARL.png')",
        'split':    "url('/images/Result/SPLIT.png')",
        'sunset':   "url('/images/Result/SUNSET.png')",
      },
    },
  },
  plugins: [],
};
export default config;

