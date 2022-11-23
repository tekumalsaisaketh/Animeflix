import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from 'react-query'
import LeftSide from './components/Leftside';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from './components/Player'
import DetailsPage from './components/Details';
import RightSide from './components/Rightside';
import PageSelector from './components/pages';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          <Routes>
              <Route index element=
              {
                <div className='container'>
                  <div className='leftside'>
                    <LeftSide></LeftSide>
                  </div>
                  <div className='rightside'>
                    <RightSide></RightSide>
                  </div>
                </div>
              } />
              <Route path="player/*" element={<Player></Player>} />
              <Route path="details/*" element={<DetailsPage></DetailsPage>}/>
          </Routes>
        </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
