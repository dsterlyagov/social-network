import React from 'react';
import logo from './fda_logo.png';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    console.log(props);
    return (

        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile
                        stateProfilePage={props.state.messagesPage}
                        dispatch={props.dispatch}
                    />}
                    />

                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
