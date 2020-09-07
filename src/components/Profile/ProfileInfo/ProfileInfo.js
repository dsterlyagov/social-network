import React from "react";
import exper from "../../../img/4.jpeg";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () =>{
    return(
      <div>
          <div>
              <img src={exper} alt=""/>

          </div>
          <div className={classes.descriptionBlock}>
              ava+description
          </div>
      </div>

    )
}
export default ProfileInfo;