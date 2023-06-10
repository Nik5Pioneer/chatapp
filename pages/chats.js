import React, { useEffect } from "react";

import { Context } from "../context";

import { userRouter } from "next/router";

import dynamic from "next/dynamic";

const ChatEngine = dynamic(() => 
import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial)
)

export default function Chats() {
  const { username, secret } = React.useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = userRouter()

  useEffect(() => {
   if (typeof document !== null) {
    setShowChat(true);
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/")
  })

  if (!showChat) return <div />;
  return (
  <div className="background">
   <div className='shadow'>
    <ChatEngine
      height='calc(100vh - 200px)'
      projectID="3e4c79b0-db8e-4822-bbc7-a08828cff9f3"
      userName={username}
      userSecret={secret}
      renderNewMessageForm={() =><MessageFormSocial />}
      />
    </div>
  </div>
  )
}
