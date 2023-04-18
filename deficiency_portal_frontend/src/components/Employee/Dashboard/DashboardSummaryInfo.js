import useDashboardDeficiencyNameStore from "../../../hooks/useDashboardDeficiencyNameStore";

function DashboardSummaryInfo() {
    const activeDeficiencyName = useDashboardDeficiencyNameStore((state) => state.activeDeficiencyName);
    const summary = useDashboardDeficiencyNameStore((state) => state.summary);

    const header = (activeDeficiencyName.name ? (
        <>
            <span className='infoCategory'>Deficiency Name</span>
            <span className='infoFetched'>{activeDeficiencyName.name}</span>
        </>
    ) : 
        <>
            <span className='infoCategory'>Total No. Of Deficiency</span>
            <span className='infoFetched'>{summary.total_deficiency ? summary.total_deficiency : 0}</span>
        </>
    );


    return ( 
    <div className="dashboardInfoDiv">
        {header}
        <span className='infoCategory'>No. of Students with PENDING Deficiency</span>
        <span className='infoFetched_red'>{summary.pending_count ? summary.pending_count : 0}</span>
        <span className='infoCategory'>No. of Students with COMPLETED Deficiency</span>
        <span className='infoFetched_green'>{summary.complete_count ? summary.complete_count : 0}</span>
    </div>
);
}

export default DashboardSummaryInfo;