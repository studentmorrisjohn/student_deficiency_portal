import useStudentWithDeficiencyListStore from "../../hooks/useStudentWithDeficiencyListStore";
import useDeficiencyNamesStore from "../../hooks/useDeficiencyNamesStore";
import StudentWithDeficiencyListRow from "./StudentWithDeficiencyListRow";
import ReactPaginate from 'react-paginate';
import { useState } from "react";

function StudentListTable() {
    const studentsWithDeficiencyList = useStudentWithDeficiencyListStore((state) => state.studentsWithDeficiencyList);
    const activeDeficiencyName = useDeficiencyNamesStore((state) => state.activeDeficiencyName);

    const itemsPerPage  = 10;

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = studentsWithDeficiencyList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(studentsWithDeficiencyList.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % studentsWithDeficiencyList.length;

        setItemOffset(newOffset);
    };

    return (
    <>
        <div className="addStudentTable">
            <table>
                <thead>
                    <tr>
                        <th>
                            Student Number
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Affiliation
                        </th>
                        {activeDeficiencyName.category === "Finance" ? <th>
                            Balance
                        </th> : ""}

                        <th style={{padding:"0 4rem"}}>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((studentWithDeficiency) => 
                        <StudentWithDeficiencyListRow studentWithDeficiency={studentWithDeficiency} />
                    )}            
                </tbody>
            </table>
        </div>
        <div className="footer_container">
            <span className="footer_text">{currentItems.length ? `Showing ${itemOffset + 1} to ${itemOffset + currentItems.length} of ${studentsWithDeficiencyList.length} entries` : ""}</span>
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
    );
}

export default StudentListTable;