import React from "react";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import BillBox from "./components/BillBox";

function App() {
  return (
    <div>
      <FriendsList />
      <AddFriend />
      <BillBox />
    </div>
  );
}

export default App;
