import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import WatchAndPhoneCart from "../WatchAndPhoneCart";
import { customStyle } from "../customStyle/CustomStyle";

function PaginatedItems(props) {
  const { itemsPerPage, data } = props;

  function Items({ currentItems }) {
    return (
      <>
        <div className="pt-44 grid__product gap-4 py-4 px-6">
          {currentItems &&
            currentItems.map((item, index) => (
              <WatchAndPhoneCart
                key={index}
                data={item}
                styling={customStyle}
              />
            ))}
        </div>
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default PaginatedItems;
