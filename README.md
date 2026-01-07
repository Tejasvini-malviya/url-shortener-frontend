# URL Shortener Frontend

A modern, beautiful URL shortener web application built with React, featuring a stunning pastel blue design with smooth animations.

## 🎨 Design Features

- **Modern Pastel Blue Theme**: Soft, eye-pleasing gradient background with light blue accents
- **Split-Card Layout**: Two elegant white cards with rounded corners and soft shadows
- **Smooth Animations**: Framer Motion powered animations including:
  - Card slide-in effects on page load
  - Button hover and tap animations
  - Floating background elements
  - Copy success animations
- **Fully Responsive**: Adapts beautifully to desktop and mobile devices

## 🛠️ Tech Stack

- **React** (v19.2.3) - UI library
- **Vite** (v5.0.0) - Build tool and dev server
- **Material UI** (v7.3.6) - Component library
- **Framer Motion** (v12.24.7) - Animation library
- **React Router** (v7.11.0) - Client-side routing

## 📄 Pages

### Homepage (`/`)
The main URL shortener interface featuring:

**Left Card - Introduction**
- "Shorten Your Links" heading
- Descriptive subtitle: "Fast, secure & reliable URL shortener"
- Custom-generated flat vector illustration
- Floating decorative elements (circles, clouds)
- Two action buttons: "Get Started" and "Shorten URL"

**Right Card - URL Shortener Form**
- Long URL input field
- Optional custom alias input
- "Generate Short Link" button
- Result display with shortened URL
- Copy-to-clipboard button with success animation
- Helper text: "Free & instant link shortening"

### Login (`/login`)
User authentication page

### Signup (`/signup`)
User registration page

### Welcome (`/welcome`)
Post-authentication welcome screen

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortener-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

### `npm run dev`
Runs the app in development mode using Vite.  
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`
Builds the app for production to the `dist` folder.  
The build is optimized for best performance.

### `npm run preview`
Preview the production build locally.

## 🎯 Key Features

- ✨ Beautiful, modern UI with pastel aesthetics
- 🎭 Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Custom vector illustrations
- 📋 One-click copy to clipboard
- 🔒 Secure and reliable URL shortening
- ⚡ Fast and instant link generation

## 📁 Project Structure

```
url-shortener-frontend/
├── src/
│   ├── assets/          # Images and illustrations
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   │   ├── Homepage.jsx
│   │   ├── login.jsx
│   │   ├── signup.jsx
│   │   └── Welcome.jsx
│   ├── App.jsx          # Main app component with routing
│   └── index.jsx        # Entry point
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🎨 Color Palette

- **Background Gradient**: `#E3F2FD` → `#BBDEFB`
- **Primary Blue**: `#1976D2`
- **Accent Blue**: `#42A5F5`
- **White Cards**: `#FFFFFF`
- **Text Gray**: `#666666`
- **Success Green**: `#4CAF50`

## 📝 License

This project is licensed under the MIT License.

