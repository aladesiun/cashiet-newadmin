import { useEffect } from "react";

const Notification = ({ notifyFailed, notifySuccess }) => {
    useEffect(() => {
        // checkFail(); 
    })
    return (
        <>
            {notifySuccess.status && 
            <div class="alert alert-primary" role="alert">
                {notifyFailed.message}
            </div>
            }
            {notifyFailed.status &&
                 <div class="alert alert-danger" role="alert">
                 {notifyFailed.message}
             </div>
             }
        </>
    );
}

export default Notification;