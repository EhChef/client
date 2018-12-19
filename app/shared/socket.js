import * as SocketIO from "nativescript-socket.io";
SocketIO.enableDebug();
export const socket = SocketIO.connect('http://dd9aaf1e.ngrok.io');