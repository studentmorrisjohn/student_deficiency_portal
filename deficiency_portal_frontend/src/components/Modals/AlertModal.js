import React from "react";
import useAlertModalStore from "../../hooks/useAlertModalStore";


const Xcircle = new URL("../images/XCircle.png", import.meta.url)

const AlertModal = () => {
    const type = useAlertModalStore((state) => state.type);
    const message = useAlertModalStore((state) => state.message);
    const header = useAlertModalStore((state) => state.header);
    const closeAlert = useAlertModalStore((state) => state.closeAlert);

    return(
        <>
        <div className="modalBackgroundTop">
                <div className={type==="Success" ? "modalContainerXSmall_green" : "modalContainerXSmall_red"}>
                    <div className="modalDivHidden_top">
                        <span className="modalWhiteTextBold">{header}</span>
                        <img onClick={closeAlert} className="xcircle" src={Xcircle}/>
                    </div>
                    <div className="modalDivHidden">
                        <span className="modalWhiteSubtext">{message}</span>
                    </div>
                    
                </div>
            </div>
        </>
    )

}

export default AlertModal;