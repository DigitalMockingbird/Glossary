import React from "react";
import {render} from "react-dom";
import createLogger from "redux-logger";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";

import App from "./components/App";
import initialState from "./reducers/initialState";
import visibleGlossary from "./reducers/visibleGlossary";

let store = createStore(
    visibleGlossary,
    initialState,
    compose(
        applyMiddleware(createLogger())
    )
);

render((
    <Provider store={store}>
      <div className="app">
        <App/>
      </div>
    </Provider>
), document.getElementById("content"));
