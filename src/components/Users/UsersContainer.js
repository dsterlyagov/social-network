import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAc, setCurrentPageAC, setUsersAc, setUsersTotalCountAC, unfollowAc} from "../../redux/users-reducer";

let mapStateToProps = (state) =>{
    return {users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,

    }
 }

 let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAc(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAc(users))
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Users)