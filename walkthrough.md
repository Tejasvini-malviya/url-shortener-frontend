# Walkthrough - New Authentication UI
I have implemented the new "Welcome" and "Sign Up" screens based on the design you provided, and also updated the "Login" screen to match the new visual style.

## Pages Implemented

### 1. Welcome Page (`/welcome`)
- **Design**: Matches the "Wellcome" screen from your image.
- **Features**:
    - Animated background elements (clouds/blobs).
    - "Wellcome" and subtitle text with fade-in animation.
    - Placeholder for illustration (you can replace the code with an actual `<img>` tag).
    - "Log in" and "Sign Up" buttons with hover effects.
    - **Route**: [http://localhost:3000/welcome](http://localhost:3000/welcome)

### 2. Signup Page (`/signup`)
- **Design**: Matches the "Sign up" screen from your image.
- **Features**:
    - Animated leaf decoration in the top right.
    - Form fields using Material UI with custom styling.
    - "Sign Up" button.
    - Navigation to Login page.
    - **Route**: [http://localhost:3000/signup](http://localhost:3000/signup)

### 3. Login Page (`/login`)
- **Design**: a consistent Light Blue theme matching the other pages.
- **Features**:
    - Consistent animations and styling.
    - **Route**: [http://localhost:3000/login](http://localhost:3000/login)

## Animations
I used `framer-motion` for all animations:
- **Entrance Animations**: Elements slide in and fade in smoothly (staggered).
- **Background**: Continuous floating animations for background blobs/leaves.
- **Interactions**: Button hover states.

## How to Test
1. Make sure your development server is running (`npm start`).
2. Navigate to `/welcome` to see the start screen.
3. Click "Sign Up" or "Log in" to test the navigation and view the other screens.

## Next Steps
- Replace the illustration placeholder in `Welcome.jsx` with your actual SVG or Image asset.
- Add your backend integration logic to the `onClick` handlers in `Login.jsx` and `Signup.jsx`.
