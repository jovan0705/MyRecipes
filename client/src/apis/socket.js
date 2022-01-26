import { io } from "socket.io-client";

export const socket = io.connect("https://my-recipes8.herokuapp.com/");