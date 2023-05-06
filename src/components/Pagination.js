// import React from 'react'

// const Pagination = ({ activePage, pages, setActivePage }) => {
//     // Methods
//     const getPages = () => {
//         const elements = [];
//         for (let i = 1; i <= pages; i++) {
//             elements.push(
//                 <div
//                     className={`${activePage === i ? "active" : ""}`}
//                     onClick={() => setActivePage(i)}
//                     key={i}
//                 >

//                     {i < 10 ? `0${i}` : i}
//                 </div>
//             );
//         }
//         return elements;
//     };

//     return (
//         <div className="pagination">
//             <div
//                 className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
//                 onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
//             >
//                 {"<"}
//             </div>
//             {getPages()}
//             <div
//                 className={`pagination-arrow ${activePage === pages ? "inactive" : ""}`}
//                 onClick={() =>
//                     activePage !== pages && setActivePage((page) => page + 1)
//                 }
//             >
//                 {">"}
//             </div>
//         </div>
//     );
// };

// export default Pagination








import React from 'react'

const Pagination = ({ activePage, setActivePage, sortedData }) => {
    return (
        <>
            <div className='pagination'>

                <button
                    className={`pagination-arrow ${activePage === 1 ? "inactive" : ""}`}
                    onClick={() => setActivePage(prevState => Math.max(prevState - 1, 0))}
                    disabled={activePage === 1}
                >
                    {"<"}
                </button>

                <button
                    className={`pagination-arrow ${sortedData.length < 5 ? "inactive" : ""}`}
                    onClick={() => setActivePage(prevState => prevState + 1)}
                    disabled={sortedData.length < 5}
                >
                    {">"}
                </button>

            </div>
        </>
    )
}

export default Pagination


