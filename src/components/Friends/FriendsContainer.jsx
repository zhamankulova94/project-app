import { connect } from 'react-redux'
import Friends from './Friends'

// const FriendsContainer = (props) => { 
//     return (
//       <StoreContext.Consumer> 
//           {(store) => {
//                 let state = store.getState().sidebar
//                 return (
//                     <Friends
//                         state={state} />
//                 )
//         } }

//       </StoreContext.Consumer>
//     )
    
// }

let mapStateToProps = (state) => {
    return {
        state: state.sidebar
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer