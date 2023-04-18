import { useState } from "react";
import useAddStudentListStore from "../../hooks/useAddStudentListStore";
import AddStudentRow from "./AddStudentRow";
import ReactPaginate from 'react-paginate';

function AddStudentTable() {
    const itemsPerPage  = 10;

    const addStudentList = useAddStudentListStore((state) => state.addStudentList);
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = addStudentList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(addStudentList.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % addStudentList.length;

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
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {addStudentList ? currentItems.map((student) => 
                <AddStudentRow student={student} /> 
            ): <td>"No students with that keyword"</td>}            
                </tbody>
            </table>
        </div>
        <div className="footer_container">
            <span className="footer_text">{currentItems.length ? `Showing ${itemOffset + 1} to ${itemOffset + currentItems.length} of ${addStudentList.length} entries` : ""}</span>
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
</>);
}

export default AddStudentTable;