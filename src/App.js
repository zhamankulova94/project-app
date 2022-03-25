import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile postData={props.appState.postData} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogsData={props.appState.dialogsData} messageData={props.appState.messageData} />} />
          <Route path='/news' element={<News/>} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>        
      </div>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
