// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import ReactPaginate from "react-paginate";
// import WatchAndPhoneCart from "../WatchAndPhoneCart";
// import { customStyle } from "../customStyle/CustomStyle";
// import ProductManagementCart from "./../ProductManagementCart";
// import style from "./PaginatedItems.module.css";

// function PaginatedProductItems(props) {
//   const { itemsPerPage, data } = props;

//   // const dataManagement = useSelector((data) => data);

//   function ProductItems({ currentItems }) {
//     return (
//       <>
//         <table>
//           <thead>
//             <tr className="text-xs">
//               <th>تصویر</th>
//               <th>نام کالا</th>
//               <th>دسته بندی</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <ProductManagementCart key={index} item={item} />
//             ))}
//           </tbody>
//         </table>
//       </>
//     );
//   }

//   const [itemOffset, setItemOffset] = useState(0);

//   let currentItems;
//   let pageCount;

//   if (data.cart.searchItems.length === 0) {
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     currentItems = data.cart.items.slice(itemOffset, endOffset);
//     pageCount = Math.ceil(data.cart.items.length / itemsPerPage);
//   } else {
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     currentItems = data.cart.searchItems.slice(itemOffset, endOffset);
//     pageCount = Math.ceil(data.cart.searchItems.length / itemsPerPage);
//   }

//   const handlePageClick = (event) => {
//     if (data.cart.searchItems.length === 0) {
//       const newOffset =
//         (event.selected * itemsPerPage) % data.cart.items.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     } else {
//       const newOffset =
//         (event.selected * itemsPerPage) % data.cart.searchItems.length;
//       console.log(
//         `User requested page number ${event.selected}, which is offset ${newOffset}`
//       );
//       setItemOffset(newOffset);
//     }
//   };

//   return (
//     <div>
//       <ProductItems currentItems={currentItems} />
//       <div className="mt-10">
//         <ReactPaginate
//           containerClassName={style.container}
//           pageClassName={style["page-number"]}
//           activeLinkClassName={style.active}
//           previousClassName={style.previous}
//           nextClassName={style.next}
//           previousLinkClassName={style["next-link"]}
//           nextLinkClassName={style["next-link"]}
//           breakLabel="..."
//           nextLabel=">"
//           onPageChange={handlePageClick}
//           pageCount={pageCount}
//           previousLabel="<"
//           renderOnZeroPageCount={null}
//         />
//       </div>
//     </div>
//   );
// }
// export default PaginatedProductItems;
