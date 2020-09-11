
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is, my first post?', likesCount: 23},
    ],
    newPostText: 'demetrius'
}
export const profileReducer = (state = initialState, action)=>{
console.log('profileReducer');
console.log(action)
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newPostText = action.body;

            return state;
        case SEND_MESSAGE:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.postsData.push(newPost);

            state.newPostText = '';

            return state;
        default:
            return state;
    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({

    type: UPDATE_NEW_MESSAGE_BODY,
    body: text });

export default profileReducer;