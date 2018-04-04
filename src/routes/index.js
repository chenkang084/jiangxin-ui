import React from "react";
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  Provider
} from "react-router";
import { removeMetaReferrer, addMetaReferrer } from "../utils/article.util";

const handleRoute = params => {
  console.log(params);
  if (window.location.pathname.indexOf("/article") > -1) {
    addMetaReferrer();
  } else {
    removeMetaReferrer();
  }
  const content = document.getElementById("router-content");
  if (!content.className) {
    content.className = "animated fadeIn";
    setTimeout(() => {
      content.className = "";
    }, 1000);
  }
};

const routers = [
  {
    path: "/",
    onChange: handleRoute,
    getComponent(nextState, cb) {
      require.ensure(
        [],
        require => {
          cb(null, require("../components/nav/nav").default);
        },
        "nav"
      );
    },
    indexRoute: {
      getComponent(nextState, cb) {
        require.ensure(
          [],
          require => {
            cb(null, require("../components/home/home").default);
          },
          "home"
        );
      }
    },
    childRoutes: [
      {
        path: "home",
        onChange: handleRoute,
        getComponent(nextState, cb) {
          require.ensure(
            [],
            require => {
              cb(null, require("../components/home/home").default);
            },
            "home"
          );
        }
      },
      {
        path: "articles",
        onChange: handleRoute,
        getComponent(nextState, cb) {
          require.ensure(
            [],
            require => {
              cb(null, require("./articleList").default);
            },
            "articles"
          );
        }
      },
      {
        path: "article/:id",
        onChange: handleRoute,
        getComponent(nextState, cb) {
          require.ensure(
            [],
            require => {
              cb(null, require("./article").default);
            },
            "articleDetail"
          );
        }
      }
    ]
  },
  {
    path: "/login",
    getComponent(nextState, cb) {
      require.ensure(
        [],
        require => {
          cb(null, require("./login").default);
        },
        "login"
      );
    }
  },
  {
    path: "/editor",
    getComponent(nextState, cb) {
      require.ensure(
        [],
        require => {
          cb(null, require("./App").default);
        },
        "editorApp"
      );
    },
    indexRoute: {
      getComponent(nextState, cb) {
        require.ensure(
          [],
          require => {
            cb(null, require("./editor").default);
          },
          "editor"
        );
      }
    }
  }
];

class AppRouters extends React.Component {
  render() {
    return <Router history={browserHistory} routes={routers} />;
  }
}

export default AppRouters;
