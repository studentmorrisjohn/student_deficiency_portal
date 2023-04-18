import React from "react";
import useSuccessModalStore from "../../hooks/useSuccessModalStore";

const Xcircle = new URL("../images/XCircle.png", import.meta.url)

const FailedModal = () => {
    const message = useSuccessModalStore((state) => state.message)
    const closeSuccessModal = useSuccessModalStore((state) => state.closeSuccessModal);

    return(
        <>
        <div className="modalBackgroundTop">
                <div className="modalContainerXSmall_red">
                    <div className="modalDivTop">
                        <span className="modalWhiteTextBold">Error</span>
                        <img onClick={closeSuccessModal} className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalDiv">
                        <span className="modalWhiteSubtext">{message}</span>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default FailedModal;