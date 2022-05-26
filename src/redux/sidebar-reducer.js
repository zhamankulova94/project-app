let initialState = {
    sidebar: [
        {name: 'Alex', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png', id:1},
        {name: 'Max', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png', id:2},
        {name: 'Jack', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png', id:3}
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state
}
export default sidebarReducer