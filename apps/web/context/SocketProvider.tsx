"use client"
import React = require("react")
import  { Children, ReactNode, useCallback, useContext, useEffect, useState } from "react"
import { io ,Socket,} from "socket.io-client"
//BY this io we can make a connection with our server 
interface SocketProviderProps{
 children?:React.ReactNode
}

interface ISocketContext{
 sendMessage:(msg:string)=>any
 messages:string[];
}

const SocketContext=React.createContext<ISocketContext | null>(null);

export const useSocket=()=>{
 const state=useContext(SocketContext);
 if(!state)
 {
  throw new Error("state is undefined");
 }
 return state;
}
export const SocketProvider: React.FC<SocketProviderProps>=({children})=>{
 const[socket,setSocket]=useState<Socket>();
 const[messages,setMessages]=useState<string[]>([]);
 
 //This send message will send a message to our socket server 
 const sendMessage:ISocketContext['sendMessage']=useCallback((msg)=>{
  console.log("Send message",msg);
  if(socket)
  {
   socket.emit('event:message',{message:msg})
  }
 },[socket])

 const onMessageRec=useCallback((msg:string)=>{
    console.log('From Server msg Rec',msg)
    const{message}=JSON.parse(msg) as {message:string}
    setMessages((prev)=>[...prev,message])
 },[])
 useEffect(() => {
   const _socket=io('http://localhost:4001')
   _socket.on('message',onMessageRec)
   setSocket(_socket)
   //if we re-render this component we should disconnect it too
   return () => {
    _socket.disconnect();
    _socket.off('message',onMessageRec)
    setSocket(undefined)
    
   }
 }, [])
  
 return (
  <SocketContext.Provider value={{sendMessage,messages}}>
   {children}
  </SocketContext.Provider>
 )
}