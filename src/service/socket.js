import { Socket } from "socket.io-client";

export const socket = Socket.connect("SOCKET_URL");