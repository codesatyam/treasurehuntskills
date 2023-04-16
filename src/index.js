import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from "react";

export const server = "https://treasurehunt-3ubt.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logU, setlogU] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [stateCom, setstateCom] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  // const [time1, setTime1] = useState(0);
  // const [time2, setTime2] = useState(0);
  // const [time3, setTime3] = useState(0);
  // const [time4, setTime4] = useState(0);
  // const [time5, setTime5] = useState(0);
  // const [time6, setTime6] = useState(0);
  const [countUser, setCountUser] = useState(0);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
        logU,
        setlogU,
        setstateCom,
        stateCom,
        count1, setCount1,
        count2, setCount2,
        count3, setCount3,
        count4, setCount4,
        count5, setCount5,
        count6, setCount6,
        countUser, setCountUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

 
