import React, {useState} from 'react'
import LiveSession from "../components/liveSession/LiveSession"
import JoinCard from "../components/JoinCard"

import "../styles/style.css"
import "../index.css"
import { sessionDummy } from "../dummydatas/sessionDummy"


const LiveSessionContainer = (props) => {

    const [join, setJoin] = useState(0);

    const sessionList = sessionDummy;
    const listIndex = sessionList.findIndex((session) => session.livehole_id === props.livehole_id )
    const imageLink = sessionList[listIndex].imageLink;
    const hostName = sessionList[listIndex].hostName;
    const channelNum = props.channelNum;

     return <LiveSession hostName={hostName} imageLink={imageLink} channelNum={channelNum}/>
}

export default LiveSessionContainer