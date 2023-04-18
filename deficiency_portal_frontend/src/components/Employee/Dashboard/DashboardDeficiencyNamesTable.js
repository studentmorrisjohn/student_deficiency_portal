import React from "react"
import { useState} from "react"
import ReactPaginate from 'react-paginate';
import useDashboardDeficiencyNameStore from "../../../hooks/useDashboardDeficiencyNameStore";
import DashboardDeficiencyNamesRow from "./DashboardDeficiencyNamesRow";

const DashboardDeficiencyNamesTable = () => {
    const deficiencyNames = useDashboardDeficiencyNameStore((state) => state.deficiencyNames);

    const itemsPerPage  = 5;

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = deficiencyNames.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(deficiencyNames.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % deficiencyNames.length;

        setItemOffset(newOffset);
    };

    return (
        <>
        <div className="deficiency_table">
            <table>
                <thead>
                    <tr>
                        <th>
                            Deficiency Name
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            No. of Students With Deficiency
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((deficiencyName) => 
                        <DashboardDeficiencyNamesRow deficiencyName={deficiencyName} key={deficiencyName.name} />
                    )}
                </tbody>
            </table>
        </div>

        <div className="footer_container">
            <span className="footer_text">{currentItems.length ? `Showing ${itemOffset + 1} to ${itemOffset + currentItems.length} of ${deficiencyNames.length} entries` : ""}</span>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination_buttons_div"
                pageLinkClassName="pagination_buttons"
                previousLinkClassName="pagination_buttons"
                nextLinkClassName="pagination_buttons"
                activeLinkClassName="pagination_buttons_active"
            />
        </div>
        </>
        
    )
}

export default DashboardDeficiencyNamesTable;