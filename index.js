import { PeerServer } from "peer";

const peerServer = PeerServer({
    port: process.env.PORT || 9000,
    path: '/myapp'
  });



  console.log('peer server connected')