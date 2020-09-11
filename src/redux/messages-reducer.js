const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Demetrius'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hi'},

    ],
    newMessageBody: "",
}
const messagesReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
            console.log('77')
            console.log(state)
            let body =  state.newMessageBody;
            state.newMessageBody= '';
            state.messagesData.push({id:6, message: body});
            return state;

        case UPDATE_NEW_POST_TEXT:
            console.log('88');
            console.log(action)
            state.newMessageBody = action.newText;
            return state;

        default:
            return state;


    }


}
export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text });
export default messagesReducer;