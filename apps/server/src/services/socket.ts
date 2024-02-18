import { Server, Socket } from "socket.io";
import Redis from "ioredis";
//Here we need two components one for publishing the messages and one for subscribing to messages
const pub = new Redis({
  host: "redis-3e86d6cb-shalabhvdjs12-1b82.a.aivencloud.com",
  port: 12070,
  username: "default",
  password: "AVNS_UW0YBHW2BEfK2-cjNBm",
  connectTimeout: 10000

});

const sub = new Redis(
  {
    host: 'redis-3e86d6cb-shalabhvdjs12-1b82.a.aivencloud.com',
    port: 12070,
    username: 'default',
    password: 'AVNS_UW0YBHW2BEfK2-cjNBm',
    connectTimeout: 10000

  }
);
class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init SocketService");
    this._io = new Server({
      cors: {
        allowedHeaders: ['*'],
        origin: '*'
      }
    });
    sub.subscribe('MESSAGES')
  }
  //Event listeners
  public initListeners() {
    const io = this.io;
    console.log("INITIALIZED socket listeners...")
    io.on("connect", (socket) => {
      console.log(`New Socket Connected: ${socket.id}`)
      socket.on('event:message', async ({ message }: { message: string }) => {
        console.log(`New message received: ${message}`)
        //PUBLIsh this message to redis for that we have to install ioredis
        await pub.publish("MESSAGES", JSON.stringify({ message }));

      })
    })
    sub.on('message', (channel, message) => {
      if (channel === 'MESSAGES') {
        io.emit('message', message)
      }
    })

  }



  get io() {
    return this._io;
  }
}
export default SocketService