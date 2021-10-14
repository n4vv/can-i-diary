import { useState } from 'react'
import { DiaryList } from './components/DiaryList';
import { ReqComponent } from './components/ReqComponent';
import { UserComponent } from './components/UserComponent';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <img src="/img/osrs_logo.png" alt="Old School Runescape"/>
        <h1>Can I Diary?</h1>
      </header>
      <main>
        <UserComponent loading={loading} setLoading={setLoading}/>      
      {
        !loading ?   
          <>      
            <DiaryList />                    
            <Switch>
              <Route path="/" exact Home component={() => <ReqComponent />}></Route>
              <Route path="/:diaryPath" component={(props) => <ReqComponent diaryPath={props.match.params.diaryPath}/>}></Route>            
            </Switch>
          </> : 
          ''
      }
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
