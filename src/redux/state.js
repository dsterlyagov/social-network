const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state: {
        profilePage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hi'},

            ],
            dialogsData: [
                {id: 1, name: 'Demetrius'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
        },
        messagesPage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It is, my first post?', likesCount: 23},
            ],
            newPostText: 'demetrius'

        }


    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {

        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.messagesPage.postsData.length,
                message: this._state.messagesPage.newPostText,
                likesCount: 0,
            }
            this._state.messagesPage.postsData.push(newPost);
            this._state.messagesPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.messagesPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },


}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text })



export default store;