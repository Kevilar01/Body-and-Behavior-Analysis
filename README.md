TailwindCSS Configuration – Project README

This project uses a fully customized Tailwind CSS configuration designed for modern frontend development with TypeScript. The setup includes an elegant color system, fluid animations, extended typography, and complete support for shadcn/ui components.

📦 Installation & Setup

Ensure you have Tailwind installed:

npm install tailwindcss postcss autoprefixer


Initialize Tailwind (if not already):

npx tailwindcss init -p


The provided configuration replaces your default tailwind.config.ts.

🗂 Project Structure

Tailwind scans the following folders for CSS classes:

/pages/**/*.{ts,tsx}
/components/**/*.{ts,tsx}
/app/**/*.{ts,tsx}
/src/**/*.{ts,tsx}


This ensures efficient tree-shaking and minimal bundle size.

🎨 Theme & Styling Features
🌗 Dark Mode

Enabled via class strategy

<html class="dark">

🖋 Custom Typography

Two custom font families are included:

Poppins – clean, modern sans-serif

Playfair Display (as elegante) – elegant serif for headers & hero sections

Usage example:

<h1 class="font-elegante">Welcome</h1>
<p class="font-poppins">Modern design system</p>

🎨 Modern Color System

Inspired by interior design aesthetics, the palette includes warm neutrals and deep tones.

Primary Colors
Name	Hex
primary	#4A6B6B
secondary	#bc9941
accent	#91374c
Neutral Colors

neutral.light → #F8F6F3

neutral.taupe → #B8A898

Background

background.DEFAULT → white

background.cream → soft cream

shadcn/ui Support

Includes all required CSS variable mappings:

card

popover

muted

ring

sidebar
… and more.

This ensures theme consistency for components like buttons, dialogs, and dropdowns.

🧱 Responsive Container Settings

Centered layout

Default padding: 2rem

Custom 2XL breakpoint: 1400px

container: {
  center: true,
  padding: "2rem",
  screens: { "2xl": "1400px" },
}

✨ Animations

Custom accordion animations for dropdowns, FAQs, and collapsibles:

accordion-down: height 0 → full height
accordion-up: full height → 0


Registered under:

animation: {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
}


Smooth, modern animations are enabled via:

tailwindcss-animate Plugin
plugins: [tailwindcssAnimate]

🟦 Border Radius System

Uses CSS variables so your UI automatically adapts to the theme:

lg → var(--radius)

md → calc(var(--radius) - 2px)

sm → calc(var(--radius) - 4px)

Perfect for consistent component rounding.

🚀 Usage Example
<div class="bg-primary text-primary-foreground p-6 rounded-lg font-poppins">
  Modern Tailwind Design
</div>

🧩 Technologies Used

Tailwind CSS

TypeScript

shadcn/ui color variables

tailwindcss-animate plugin