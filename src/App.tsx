import React from 'react';
import './App.css';
import Login from './screens/login/components/login';
import {ThemeProvider} from "styled-components";
import theme from "./themes/main/theme";
import {GlobalStyles} from "./themes/main/global-styles";
import {Route, Routes} from "react-router-dom";
import MoviesList from "./screens/movies-list/movies-list";
import {LOGIN_URL} from "./screens/login/components/login.type";
import {MOVIES_LIST_URL} from "./screens/movies-list/movies-list.type";
import store from "./store/store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <>
    <Provider store={store}>
    <GlobalStyles/>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route element={<Login/>} path={LOGIN_URL}/>
      <Route element={<MoviesList/>} path={MOVIES_LIST_URL}/>
    </Routes>
    </ThemeProvider>
    </Provider>
    </>
  )
}

export default App;
