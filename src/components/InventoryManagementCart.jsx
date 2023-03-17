const InventoryManagementCart = ({ item, priceData, quantityData }) => {
  return (
    <>
      <tr className="text-xs">
        <td>{item.name}</td>
        <td
          contentEditable="true"
          suppressContentEditableWarning={true}
          id={item.id}
          className="text-center"
          onBlur={(e) => {
            priceData(
              Number(e.target.lastChild.data)
                ? Number(e.target.lastChild.data).toLocaleString()
                : Number(
                    e.target.lastChild.data.split(",").join("")
                  ).toLocaleString(),
              e.target.id
            );

            console.log(
              Number(
                e.target.lastChild.data.split(",").join("")
              ).toLocaleString()
            );
            console.log(e.target.id);
          }}
        >
          {item.price}
        </td>
        <td
          contentEditable="true"
          suppressContentEditableWarning={true}
          id={item.id}
          className="text-center"
          onBlur={(e) => {
            quantityData(e.target.lastChild.data, e.target.id);

            console.log(e.target.lastChild.data);
            console.log(e.target.id);
          }}
        >
          {item.quantity}
        </td>
      </tr>
    </>
  );
};

export default InventoryManagementCart;
