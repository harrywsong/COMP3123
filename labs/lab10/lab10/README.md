# Lab 10 - React Redux + JWT Demonstration

Extremely barebones, simple demo of how **Redux** and **JWT (JSON Web Token)** works.

Uses the **Redux Toolkit** to store a simulated JWT token after a user “logs in”.

## What the Application Does
1. User opens the page
2. User enters username
3. User presses login button
4. A fake JSON Web Token is generated ("FAKE JWT TOKEN")
5. Redux stores the username and JWT
6. The page updates itself to reflect the username entered, + shows the fake JWT
7. Clicking the logout button clears the Redux state

### Prerequisites
- Node.js
- npm

### Commands Used to Create the Application
1. npx create-react-app lab10
2. cd lab10
3. npm install @reduxjs/toolkit react-redux

### Created / Edited Files
- src/store.js
- src/authSlice.js
- src/index.js
- src/App.js
- README.md

## Redux Concepts

### State
The data that Redux stores:
```javascript
{
  user: null,
  token: null
}
```

### Store
Where the Redux state is stored (defined in `store.js`):
```javascript
export const store = configureStore({
  reducer: { auth: authReducer }
});
```

### Reducer
Updates state based on function actions (defined in `authSlice.js`):
```javascript
login: (state, action) => { /* updates state */ }
logout: (state) => { /* clears state */ }
```

### Actions
Object with instructions telling Redux what has occurred:
```javascript
login({ username })
logout()
```

### Dispatch
Sending of an action to the store so the reducer can update the state:
```javascript
dispatch(login({ username }));
```

### Subscribe
Subscription occurs when the UI automatically updates and changes when the Redux state is changed:
```javascript
const { user, token } = useSelector(state => state.auth);
```

## Running the Application
```bash
npm start
```