import { createContext, useContext, useMemo } from 'react';
import { io } from 'socket.io-client';
import { server } from './constants/config';
// Adjust this import based on your project structure

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => {
    return io(server, {
      withCredentials: true,
      transports: ["websocket", "polling"], // Ensure proper transports
    });
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => {
  return useContext(SocketContext);
};

export { SocketProvider, useSocket };

