import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/main-component";
import DemoPoll from "./components/demo-poll";
import New from "./components/new";
import Poll from "./components/poll";
import PollResult from "./components/poll-result";
import PollAdmin from "./components/poll-admin";
import EditPoll from "./components/edit-poll";
import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import ManagePolls from "./components/ManagePolls";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/demo-poll" element={<DemoPoll />} />
        <Route path="/new" element={<New />} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/poll-result" element={<PollResult />} />
        <Route path="/poll-admin/" element={<PollAdmin />} />
        <Route path="/edit-poll" element={<EditPoll />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/manage-polls" element={<ManagePolls />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
