import useDashboardDeficiencyNameStore from "../../../hooks/useDashboardDeficiencyNameStore";

function DashboardDeficiencyNamesRow({deficiencyName}) {
    const setActiveDeficiencyName = useDashboardDeficiencyNameStore((state) => state.setActiveDeficiencyName);
    const fetchDeficiencySummary = useDashboardDeficiencyNameStore((state) => state.fetchDeficiencySummary);
    const fetchBarGraphData = useDashboardDeficiencyNameStore((state) => state.fetchBarGraphData);

    async function getDeficiencySummary() {
        await fetchDeficiencySummary(deficiencyName.name);
        await fetchBarGraphData(deficiencyName.name);
        setActiveDeficiencyName(deficiencyName);
    }

    return ( 
    <tr className="hoverable" onClick={getDeficiencySummary}>
        <td>
            {deficiencyName.name}
        </td>
        <td>
            {deficiencyName.category}
        </td>
        <td>
            {deficiencyName.student_count}
        </td>
    </tr> );
}

export default DashboardDeficiencyNamesRow;