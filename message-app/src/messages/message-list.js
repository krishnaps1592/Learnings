import React,{Component} from 'react'
import MessageView from './message-view'


class MessageList extends Component{
    state = {
        message :[
            {
            from: 'Martha',
            content : 'Sample content',
            status:'read'
            },
            {
                from: 'Martha',
                content : 'Sample content',
                status:'read'
            },
    
        ]
    }

    render()
    {
        const messageViews = this.state.message.map((message,index)=><MessageView key={index} message={message}/>);
        return(<div>{messageViews}</div>)
    }
}

export default MessageList;