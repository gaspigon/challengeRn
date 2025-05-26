# React Native Challenge

This project is part of a technical test for a React Native Developer position.

## 📱 Tech Stack

- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand) – for global state
- [Axios](https://axios-http.com/) – for HTTP requests
- [Socket.IO Client](https://socket.io/docs/v4/client-api/) – for real-time notifications

---

## 🛠️ Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-native-challenge.git
cd react-native-challenge

2. Install dependencies:

```bash
npm install
npx expo install expo-dev-client
```
3. Start the development server:

```bash
npm run ios
# or
npm run android
```
⚠️ Requirements:

To run on iOS, you must have Xcode installed and a simulator configured.
To run on Android, you must have Android Studio installed with a virtual device set up.

## Project Structure:

App.tsx
screens/
  ├── HomeScreen.tsx
  └── NewDocumentScreen.tsx
shared/
  ├── components/
  ├── constants/
  ├── hooks/
  ├── services/
  ├── store/
  ├── types/
  └── utils/
