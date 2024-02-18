"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes.container}>
      <div className={classes['input-container']}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="Type your message..."
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["button"]}
        >
          Send
        </button>
      </div>
      <div className={classes["messages-container"]}>
        <ul className={classes.messages}>
          {messages.map((e, index) => (
            <li key={index} className={classes["message-item"]}>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
