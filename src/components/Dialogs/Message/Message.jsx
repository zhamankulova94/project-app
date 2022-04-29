import cl from './Message.module.css'

const Message = (props) => {
  return (
    <div className={cl.dialog}> {props.message} </div>
  )
}

export default Message