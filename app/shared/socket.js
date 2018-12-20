import * as SocketIO from "nativescript-socket.io";
SocketIO.enableDebug();
export const socket = SocketIO.connect('http://9cf0dfec.ngrok.io');