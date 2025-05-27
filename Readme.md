# React Native Challenge

This project is part of a technical test for a React Native Developer position.

## 📱 Tech Stack

- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand) – Used for global state management (documents, view mode). Chosen for its simplicity and scalability over heavier options like Redux.
- [Axios](https://axios-http.com/) – Used to simplify HTTP requests over the native `fetch` API. Enables interceptors and better error handling.
- [Socket.IO Client](https://socket.io/docs/v4/client-api/) – for real-time notifications
- `react-native-uuid` Used to generate unique IDs for newly created documents and contributors. Alternative: `uuid`, but `react-native-uuid` is  built with React Native compatibility in mind.

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

  ✅ Project Progress
✔️ Initial structure with navigation

✔️ Home screen layout with header and add button

❗ Modal and document logic will be added in next commits


| Package                                     | Purpose                   
| `@react-navigation/native` + `native-stack` | Navigation                
| `react-native-safe-area-context`            | Safe area padding         
| `expo-dev-client`                           | Native iOS/Android builds 


---

## 🔌 Backend Integration

The app connects to a local backend provided with the challenge.

### Backend Setup

To run the backend server, make sure you have [Go] installed, then:

```bash
cd path/to/backend-repo
go run server.go

By default, it runs at:

HTTP: http://localhost:8080/documents

WebSocket: ws://localhost:8080/notifications


---
## 📎 File Upload

The `Choose file` button in the `Add Document` modal is included to match the mockup design. However, no actual file upload functionality is implemented, as the challenge does not require it and no API is provided for handling files.

## 🗃️ Global State Management

The app uses [Zustand] for global state.

The `useDocumentStore` hook handles:

- `documents`: array of documents fetched from the backend
- `setDocuments()`: method to populate the store
- `viewMode`: list/grid toggle for UI display
- `toggleViewMode()`: switches view mode

Example usage in a component:

```tsx
const { documents, setDocuments, viewMode } = useDocumentStore();


### Real-Time Notifications

This app listens for document creation events sent by other users through a WebSocket connection.

- **WebSocket endpoint**: `ws://localhost:8080/notifications`
- Notifications are parsed and added to the local state via Zustand.
- A modal is available from the Home screen (notification icon) to view all received notifications.
- Each notification shows the user name, document title, and timestamp.
- Notifications are stored in memory; closing and reopening the app resets them.

**Dependencies added:**

- `uuid`: Used for local document creation IDs (`react-native-uuid`)
- `react-native-vector-icons/Ionicons`: Used to render the trash icon for removing individual notifications from the modal.

