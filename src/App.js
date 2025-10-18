import './App.css'
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  // const apiKey = process.env.REACT_APP_NEWS_API;

const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} category="sports" />}></Route>
            <Route exact path="/cricket" element={<News setProgress={setProgress}  key="cricket" pageSize={pageSize} category="cricket" />}></Route>
            <Route exact path="/football" element={<News setProgress={setProgress}  key="football" pageSize={pageSize} category="football" />}></Route>
            <Route exact path="/hockey" element={<News setProgress={setProgress}  key="hockey" pageSize={pageSize} category="hockey" />}></Route>
            <Route exact path="/basketball" element={<News setProgress={setProgress}  key="basketball" pageSize={pageSize} category="basketball" />}></Route>
            <Route exact path="/tennis" element={<News setProgress={setProgress}   key="tennis" pageSize={pageSize} category="tennis" />}></Route>
            <Route exact path="/rugby" element={<News setProgress={setProgress}  key="rugby" pageSize={pageSize} category="rugby" />}></Route>
            <Route exact path="/olympics" element={<News setProgress={setProgress}  key="olympics" pageSize={pageSize} category="olympics" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }

  export default App;
