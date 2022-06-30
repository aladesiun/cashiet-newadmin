import { useEffect } from "react";

const Notification = ({ notifyFailed, notifySuccess }) => {
    useEffect(() => {
        // checkFail(); 
    })
    return (
        <>
            {notifySuccess.status && <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', minHeight: '200px' }}>
                <div class="toast" style={{ position: 'absolute', top: '0', right: '0' }}>
                    <div class="toast-header">
                        <img src="..." class="rounded mr-2" alt="..."></img>
                        <strong class="mr-auto">Cashiet</strong>
                        <small>Just now</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        {notifySuccess.message}

                    </div>
                </div>
            </div>}
            {notifyFailed.status &&
                <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', minHeight: '200px' }}>
                    <div class="toast" style={{ position: 'absolute', top: '0', right: '0' }}>
                        <div class="toast-header">
                            <img src="..." class="rounded mr-2" alt="..."></img>
                            <strong class="mr-auto">Cashiet</strong>
                            <small>Just now</small>
                            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="toast-body">
                            {notifyFailed.message}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Notification;