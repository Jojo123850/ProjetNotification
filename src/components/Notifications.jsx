import { useState } from "react"
import '../styles/notifications.scss'

function Notifications() {

  const [notifications, setNotifications] = useState([  
    {
      id: 1,
      name: "Mark Webber",
      picture:"",
      action: "reacted to your recent post",
      comment: "My first tournament today!",
      image: "/images/avatar-mark-webber.webp",
      time: "1m ago",
      read: false,
    },
    {
      id: 2,
      name: "Angela Gray",
       picture:"",
      action: "followed you",
      comment: "",
    nameGroup:" ",
      image: "/images/avatar-angela-gray.webp",
      time: "5m ago",
      read: false,
    },
    {
      id: 3,
      name: "Jacob Thompson",
       picture:"",
      action: "has joined your group Chess Club",
      comment: "",
      image: "/images/avatar-jacob-thompson.webp",
      nameGroup:"Cheese Club",
      time: "1 day ago",
      read: false,
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
       picture:"",
      action: "sent you a private message",
      comment: "",
      image: "/images/avatar-rizky-hasanuddin.webp",
      message: "  Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
       nameGroup:" ",
      time: "5 days ago",
      read: true,
    },
    {
      id: 5,
      name: "Kimberly Smith",
      action: "commented on your picture",
      picture:"/images/image-chess.webp",
      comment: " ",
       nameGroup:" ",
      image: "/images/avatar-kimberly-smith.webp",
      time: "1 week ago",

      read: true,
    },
    {
      id: 6,
      name: "Nathan Peterson",
       picture:"",
      action: "reacted to your recent post",
      comment: "5 end-game strategies to increase your win rate",
      image: "/images/avatar-nathan-peterson.webp",
       nameGroup:" ",
      time: "2 weeks ago",
      read: true,
    },
    {
      id: 7,
      name: "Anna Kim",
       picture:"",
      action: "left the group Chess Club",
      comment: "",
      image: "/images/avatar-anna-kim.webp",
      nameGroup:"Cheese Club",
      time: "2 weeks ago",
      read: true,
    },
  ])  
  
  const NotifAsRead = (id) => {
    setNotifications(prev =>
      prev.map((nt) => 
        
        // pour qu'il affiche rous les messages
        nt.id === id ?  {...nt, read: true }: nt
        
      )
    )
  }
const ShowMessage = (id) => {
  setNotifications(prev =>
    prev.map((mess) =>
      mess.id === id ? { ...mess, showMessage: !mess.showMessage } : mess
    )
  )
}
  const CountNotif = notifications.filter(n =>!n.read).length;


 return (
  <div className="notif-wrapper">
    <div className="notif-header">
      <h1>Notifications <span className="badge">{CountNotif}</span></h1>
      <button onClick={() => setNotifications(prev => prev.map(n => ({...n, read: true})
    
    ))}>
        Mark all as read
      </button>
    </div>

    {notifications.map((notif) => (
     <div className={`data ${!notif.read ? "unread" : ""}`}
      key={notif.id} onClick={() => {NotifAsRead(notif.id)
    if (notif.message) ShowMessage(notif.id) 
    }}
    >
        <img className="avatar" src={notif.image} alt={notif.name}/>

        <article>
          <div className="notif-line">
            <span className="nom">{notif.name}</span>
            <span className="action">{notif.action}</span>
            {notif.comment && <span className="comment">{notif.comment}</span>}
            {notif.nameGroup?.trim() && <span className="group">{notif.nameGroup}</span>}
            {/* pour mettre le poit rouge */}
            {!notif.read && <span className="dot"/>}
          </div>
          <p className="time">{notif.time}</p>
          <div onClick={(e) => {
              e.stopPropagation()
              ShowMessage(notif.id)
            }}>
              {notif.showMessage && (
                <div className="message-box">
                  {notif.message}
                </div>
          )}
</div>
        </article>

        {notif.picture && <img className="notif-picture" src={notif.picture} alt=""/>}
      </div>
    ))}
  </div>
)
}

export default Notifications




 




