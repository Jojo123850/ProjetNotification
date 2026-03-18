import { useState } from "react"

export default function Notifications() {

  const [notifications, setNotifications] = useState([  // ✅ [ ici
    {
      id: 1,
      name: "Mark Webber",
      action: "reacted to your recent post",
      comment: "My first tournament today!",
      image: "/images/avatar-mark-webber.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 2,
      name: "Angela Gray",
      action: "followed you",
      comment: "",
      image: "/images/avatar-angela-gray.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 3,
      name: "Jacob Thompson",
      action: "has joined your group Chess Club",
      comment: "",
      image: "/images/avatar-jacob-thompson.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      comment: "",
      image: "/images/avatar-rizky-hasanuddin.webp",
      message: "Hello, thanks for setting up the Chess Club...",
      time: "1m ago",
      read: true,
    },
    {
      id: 5,
      name: "Kimberly Smith",
      action: "commented on your picture",
      comment: "",
      image: "/images/avatar-kimberly-smith.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 6,
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      comment: "5 end-game strategies to increase your win rate",
      image: "/images/avatar-nathan-peterson.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 7,
      name: "Anna Kim",
      action: "left the group Chess Club",
      comment: "",
      image: "/images/avatar-anna-kim.webp",
      time: "1m ago",
      read: false,
    },
  ])  

  return ( 
    <div>
      {notifications.map((notif) => (
        <div key={notif.id}>
          <img src={notif.image} alt={notif.name} />
          <h2>{notif.name}</h2>
          <p>{notif.action}</p>
          {notif.comment && <h4>{notif.comment}</h4>}
        </div>
      ))}
    </div>
  )
}