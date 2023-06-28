import Currency from "react-currency-formatter";
import moment from "moment/moment";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACES</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="USD" />- Next-Day Delivery{" "}
            <Currency quantity={amountShipping} currency="USD" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap mb-3">
          ORDER # {id}
        </p>
      </div>

      <div className="px-5 pb-2">
        <div className="flex space-x-10 overflow-x-auto">
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              alt="Product Image"
              className="h-20 object-contain sm:h-32 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
