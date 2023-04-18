import '../../style.css';
import EmployeeNav from "../EmployeeNav";
import React, { useEffect } from 'react';
import Chart from './Chart';
import { ResponsiveContainer } from 'recharts';

import Chart2 from './Chart2';
import DashboardDeficiencyNamesSearch from './DashboardDeficiencyNamesSearch';
import DashboardDeficiencyNamesTable from './DashboardDeficiencyNamesTable';
import DashboardSummaryInfo from './DashboardSummaryInfo';
import useDashboardDeficiencyNameStore from '../../../hooks/useDashboardDeficiencyNameStore';


const EmployeeDashboard = () => {
    const fetchGeneralSummary = useDashboardDeficiencyNameStore((state) => state.fetchGeneralSummary);
    const fetchBarGraphData = useDashboardDeficiencyNameStore((state) => state.fetchBarGraphData);
    const setActiveDeficiencyName = useDashboardDeficiencyNameStore((state) => state.setActiveDeficiencyName);

    useEffect(() => {
        fetchGeneralSummary();
        fetchBarGraphData("");

        return () => {
            setActiveDeficiencyName({});
            fetchGeneralSummary();
            fetchBarGraphData("");
        }
    }, []);

    return (
        <>

            <div className="screenLayout">
                <EmployeeNav />
                <div className="title_contentDiv">
                    <span className="page-title"> Dashboard </span>
                    <div className="outerDiv">

                        <div className='dashboardDiv'>
                            <DashboardSummaryInfo />

                            <div className='chart'>
                                <ResponsiveContainer  width="100%" height="100%">
                                    <Chart2/>
                                </ResponsiveContainer>
                            </div>

                            <div className='chart'>
                                <ResponsiveContainer  width="100%" height="100%">
                                    <Chart/>
                                </ResponsiveContainer>
                            </div>

                        </div>

                        <div className="innerDivider">
                            <div className="divStudentDeficiencySearch">
                                
                                <DashboardDeficiencyNamesSearch />

                            </div>
                            <DashboardDeficiencyNamesTable />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default EmployeeDashboard;