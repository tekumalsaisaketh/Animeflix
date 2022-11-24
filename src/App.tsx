import './App.css';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from 'react-query'
import LeftSide from './components/Leftside';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Player from './components/Player'
import DetailsPage from './components/Details';
import RightSide from './components/Rightside';
import { UserAuthProvider } from './Auth/UseAuthContex';
import SignInPage from './components/SignIn';
function App() {
  const queryClient = new QueryClient();
  const url=window.location.href;
  const location=url.split('/').at(-1);

  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <UserAuthProvider>
        {location==="login"&&<SignInPage></SignInPage>}
      {location!=="login"&&<div className="App">
        <Header></Header>
       
          <Routes>  
              <Route path='/'></Route>
      
              <Route index path="home" element=
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
      
    </div>}
    </UserAuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
