import React from "react";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import BillBox from "./components/BillBox";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList data={initialFriends} />
        <AddFriend />
      </div>
      <BillBox />
    </div>
  );
}

export default App;
