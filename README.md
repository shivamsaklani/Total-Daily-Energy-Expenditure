# Total-Daily-Energy-Expenditure (TDEE) App

Welcome to the **TDEE App** 👋
This is a React Native application built with [Expo](https://expo.dev) that calculates a user's **Total Daily Energy Expenditure (TDEE)** based on their Basal Metabolic Rate (BMR) and activity level.

To find Users TDEE we need calculate their BMR(BASAL Metabolic Rate)

In this Approach I haved used Harris Benedict Equation for Calculating BMR 

once We get BMR then TDEE can be Find as :

TDEE = BMR * Activity Factor 

Lightly Active	Light exercise 1–3 days per week	1.375
Moderately Active	Moderate exercise 3–5 days per week	1.55
Very Active	Hard exercise 6–7 days per week	1.725

## 🚀 Getting Started

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/tdee-app.git
cd tdee-app
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Development Server**
```bash
npx expo start
```

### **4. Open the App**
You can open the app using one of the following methods:
- **Android Emulator**: Requires Android Studio
- **iOS Simulator**: Requires macOS and Xcode
- **Expo Go**: Scan the QR code in the Expo Go app (Android & iOS)
- **Development Build**: Use a custom development build for better debugging

## 🏗️ Project Structure
The project follows a **file-based routing** structure provided by Expo.

```
/tdee-app
│── app/                  # Main application directory
│   ├── screens/          # All screen components (e.g., Home, TDEE Calculator)
│   ├── components/       # Reusable UI components (e.g., Buttons, Cards)
│   ├── utils/            # Utility functions (e.g., BMR calculations)
│   ├── GlobalState/      # Recoil state management files
│   ├── assets/           # Images, icons, and static assets
│   ├── router/           # File-based routing setup
│   ├── index.js          # Entry point
│── package.json          # Project dependencies
│── README.md             # Project documentation
│── app.config.js         # Expo configuration
│── .gitignore            # Git ignore file
```

## 🛠️ Reset Project
To get a fresh project setup, run:
```bash
npm run reset-project
```
This will move the starter code to the `app-example` directory and create a new `app/` directory for fresh development.

## 📖 Learn More
Check out the following resources to dive deeper into Expo and React Native:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [File-based Routing in Expo](https://docs.expo.dev/router/introduction/)

## 🤝 Join the Community
- **GitHub**: [Expo on GitHub](https://github.com/expo/expo)
- **Discord**: [Expo Community](https://chat.expo.dev)

---
### 🚀 Happy Coding! 🎯

