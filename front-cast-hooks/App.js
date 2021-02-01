// import React, { useContext } from "react";
// import "./App.css";
// import Products from "./components/Products/Products";
// import { AuthContext } from "./context/auth-context";
// import Auth from "./components/Auth";
// import useDarkMode from "./hooks/DarkMode";

// function App() {
//   const [theme, toggleTheme] = useDarkMode();
//   const authContext = useContext(AuthContext);
//   let content = <Auth />;

//   if (authContext.isAuth) {
//     content = (
//       <div
//         className="app"
//         style={{
//           background: theme === "dark" ? "#212121" : "#fff",
//           color: theme === "dark" ? "#fff" : "#212121",
//           transition: "all .4s eas-in-out",
//           textAlign: "center",
//         }}
//       >
//         <Products />
//         <button type="button" onClick={toggleTheme}>
//           تغییر تم
//         </button>
//       </div>
//     );
//   }

//   return content;
// }

// export default App;
