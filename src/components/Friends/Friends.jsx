import Chat from './Chat/Chat'
import cl from './Friends.module.css'

const Friends = (props) => {
    let friends = props.data.map( el => <Chat src={el.src} name={el.name} />)

    return (
        <div className={cl.friends}>
            <div className={cl.title}>Friends</div>
            <div className={cl.items}>
                {friends}
            </div>
        </div>
    )
}
export default Friends