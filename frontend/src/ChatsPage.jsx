import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatprops = useMultiChatLogic(
        '47dab85e-f1d5-43be-9f90-ee6d6ad55396', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh' }}>
            <MultiChatSocket {...chatprops}/>
            <MultiChatWindow {...chatprops} style = {{height: '100%'}}/>
        </div>
    )
}
export default ChatsPage
