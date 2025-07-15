import { io } from "socket.io-client";

export const Baseurl=
location.hostname==="localhost"?"http://localhost:3333":"/api";

//make change from http://localhost:3333 to this, rest everything would be taken
// as now we are making api calls in ip/api/login format....
// to fix use location.hostname...

export const errorreq="https://cdni.iconscout.com/illustration/premium/thumb/man-in-despair-over-data-leak-illustration-download-svg-png-gif-file-formats--cyber-security-breach-crime-pack-illustrations-7440679.png?f=webp"
export const errorfeed="https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--error-search-result-state-page-empty-states-pack-design-development-illustrations-3363936.png"

export const createsocketconnection=()=>{
    if(location.hostname==="localhost")
    return io(Baseurl)       //give the backend url where to connect
else
    return io('/',{path:"/api/socket.io"})    // check api calls of socket, u will find socket.io extra
}                                            // here  '/' means connect to same domain or ip where my frontend
                                        //was loaded