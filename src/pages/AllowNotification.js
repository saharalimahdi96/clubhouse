import React from "react";
import style from "../style/phoneConfirm.module.css";
import { Link } from "react-router-dom";


export default function AllowNotification(){
    return(
        <div className={style.phoneConfirmContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last , Important step!</h1>
                <h1 className="mb-3">Enable notification to know when people are talking</h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3>"Clubhouse Would Like to Send You Notification"</h3>
                        <p>Notification may include alerts, sounds, and icon badges</p>
                    </div>

                    <div className={style.actionBtn}>
                        <Link exact to="/home">
                            Don't Allow
                        </Link>
                        <Link exact to="/home">
                         Allow
                        </Link>
                        <img src="./images/handIcon.svg" className={style.hand_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}