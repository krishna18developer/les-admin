// Chakra imports
import { Box, Heading, SimpleGrid, Table, Code  } from '@chakra-ui/react';
import {SocketContext} from 'context/socket';
import { useCallback, useContext, useEffect, useState } from 'react';

export default function MonitorExamPage() {
    const exam_id = window.location.pathname.replace("/admin/exams/monitor/", "")
    const user_id = localStorage.getItem("user_id")
    const socket = useContext(SocketContext);

    const [joined, setJoined] = useState(false);

    const handleInviteAccepted = useCallback(() => {
        setJoined(true);
    }, []);

    const handleJoinChat = useCallback(() => {
        socket.emit("SEND_JOIN_REQUEST");
    }, []);

    useEffect(() => {
        // as soon as the component is mounted, do the following tasks:
    
        // emit USER_ONLINE event
        socket.emit("USER_ONLINE", exam_id); 
    
        // subscribe to socket events
        socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted); 
    
        return () => {
          // before the component is destroyed
          // unbind all event handlers used in this component
          socket.off("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);
        };
      }, [socket, exam_id, handleInviteAccepted]);
    

	// Chakra Color Mode
	return (
        <>
        <Box>
		    <SimpleGrid mb='120px' >
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
                    <Heading className='center'>Monitoring Exam - {exam_id}</Heading>
                </div>
		    </SimpleGrid>
		</Box>
        </>
	);
}
