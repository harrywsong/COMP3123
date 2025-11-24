# Lab 10 - React Redux + JWT Demonstration

A minimal demonstration of **Redux** state management and **JWT (JSON Web Token)** authentication using **Redux Toolkit**.

## Overview

This application simulates a basic login flow with Redux state management:

1. User enters a username
2. Clicking "Login" generates a simulated JWT token
3. Redux stores both the username and token
4. The UI updates to display the logged-in state
5. Clicking "Logout" clears the Redux state

## Setup

### Prerequisites
- Node.js and npm installed

### Installation Commands
```bash
npx create-react-app lab10
cd lab10
npm install @reduxjs/toolkit react-redux
```

## Project Structure

### Modified/Created Files
- `src/store.js` - Redux store configuration
- `src/authSlice.js` - Authentication reducer and actions
- `src/index.js` - Redux Provider setup
- `src/App.js` - Main application component
- `README.md` - This file

## Redux Concepts

### State
The data structure Redux manages:
```javascript
{
  user: null,
  token: null
}
```

### Store
The centralized state container (defined in `store.js`):
```javascript
export const store = configureStore({
  reducer: { auth: authReducer }
});
```

### Reducer
Functions that update state based on actions (defined in `authSlice.js`):
```javascript
login: (state, action) => { /* updates state */ }
logout: (state) => { /* clears state */ }
```

### Actions
Instructions dispatched to modify state:
```javascript
login({ username })
logout()
```

### Dispatch
Sending actions to the store:
```javascript
dispatch(login({ username }));
```

### Subscribe
Components automatically re-render when subscribed state changes:
```javascript
const { user, token } = useSelector(state => state.auth);
```

## Running the Application
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.