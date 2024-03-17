import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  let pageSize = 15;
  let ApiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="container">
          <LoadingBar
            color="#8ba2ff"
            progress={progress}
            loaderSpeed={3000}
            height={3}
            transitionTime={2000}
            waitingTime={3000}
          />
        </div>

        <Switch>
          <Route path="/business">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="business"
              country="in"
              category="business"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/entertainment">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="entertainment"
              country="in"
              category="entertainment"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/general">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="general"
              country="in"
              category="general"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/health">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="health"
              country="in"
              category="health"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/science">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="science"
              country="in"
              category="science"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/sports">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="sports"
              country="in"
              category="sports"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/technology">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="technology"
              country="in"
              category="technology"
              ApiKey={ApiKey}
            />
          </Route>
          <Route path="/">
            <News
              setProgress={setprogress}
              pageSize={pageSize}
              key="general"
              country="in"
              ApiKey={ApiKey}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
