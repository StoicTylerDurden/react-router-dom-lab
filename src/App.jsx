// src/App.jsx
import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import MailboxList from "./components/MailboxList";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails"
const App = () => {

  const initialMailbox = {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  };
const [mailboxes, setMailBoxes] = useState([initialMailbox]);

const addMailbox = (mailbox) => {
  mailbox._id = mailboxes.length + 1;
  setMailBoxes([...mailboxes, mailbox]);
}

return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Post Office</h1>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route
          path= "/new-mailbox"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
      <Route
        path="/mailboxes/:mailboxId"
        element={<MailboxDetails mailboxes={mailboxes} />}
      />

      <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

    </Routes>
  </>
);
};
export default App;