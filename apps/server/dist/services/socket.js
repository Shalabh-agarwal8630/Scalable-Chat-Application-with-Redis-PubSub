"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const ioredis_1 = __importDefault(require("ioredis"));
//Here we need two components one for publishing the messages and one for subscribing to messages
const pub = new ioredis_1.default({
    host: "redis-3e86d6cb-shalabhvdjs12-1b82.a.aivencloud.com",
    port: 12070,
    username: "default",
    password: "AVNS_UW0YBHW2BEfK2-cjNBm",
    connectTimeout: 10000
});
const sub = new ioredis_1.default({
    host: 'redis-3e86d6cb-shalabhvdjs12-1b82.a.aivencloud.com',
    port: 12070,
    username: 'default',
    password: 'AVNS_UW0YBHW2BEfK2-cjNBm',
    connectTimeout: 10000
});
class SocketService {
    constructor() {
        console.log("Init SocketService");
        this._io = new socket_io_1.Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        });
        sub.subscribe('MESSAGES');
    }
    //Event listeners
    initListeners() {
        const io = this.io;
        console.log("INITIALIZED socket listeners...");
        io.on("connect", (socket) => {
            console.log(`New Socket Connected: ${socket.id}`);
            socket.on('event:message', ({ message }) => __awaiter(this, void 0, void 0, function* () {
                console.log(`New message received: ${message}`);
                //PUBLIsh this message to redis for that we have to install ioredis
                yield pub.publish("MESSAGES", JSON.stringify({ message }));
            }));
        });
        sub.on('message', (channel, message) => {
            if (channel === 'MESSAGES') {
                io.emit('message', message);
            }
        });
    }
    get io() {
        return this._io;
    }
}
exports.default = SocketService;
