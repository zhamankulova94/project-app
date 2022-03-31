import cl from './../Friends.module.css'

const Chat = (props) => {
    return (
        <div className={cl.item}>
            <img src={props.src} alt="ava" />
            <div> {props.name}</div>
        </div>
    )
}
export default Chat
