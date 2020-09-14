import React from 'react';
import logo from './fda_logo.png';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
console.log('App');
console.log(props.store)
    return (

        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer
                            store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile
                        // stateProfilePage={props.state.profilePage}
                        // dispatch={props.dispatch}
                        store={props.store}
                    />}
                    />

                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
