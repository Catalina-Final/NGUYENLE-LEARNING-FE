import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./redux/actions";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngry } from "@fortawesome/free-solid-svg-icons/faAngry";
import { faLaugh } from "@fortawesome/free-solid-svg-icons/faLaugh";
import { faSadCry } from "@fortawesome/free-solid-svg-icons/faSadCry";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faSort } from "@fortawesome/free-solid-svg-icons/faSort";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons/faCheckSquare";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import { faPauseCircle } from "@fortawesome/free-solid-svg-icons/faPauseCircle";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faRegistered } from "@fortawesome/free-solid-svg-icons/faRegistered";
import { faChartLine } from "@fortawesome/free-solid-svg-icons/faChartLine";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faAngry,
  faLaugh,
  faSadCry,
  faThumbsUp,
  faHeart,
  faPlus,
  faTrashAlt,
  faEdit,
  faChevronLeft,
  faSort,
  faCheckSquare,
  faTimesCircle,
  faPauseCircle,
  faCircle,
  faUser,
  faRegistered,
  faChartLine,
  faSignOutAlt,
  faSignInAlt
);

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
