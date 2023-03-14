import Label from "../components/label/Label";
import Input from "../components/input/Input";

const FinalizeShoppingCart = () => {
  return (
    <div className="h-screen pt-52 vm:pt-44">
      <form className="flex flex-col justify-center items-center gap-6 w-[70%] m-auto">
        <div className="flex gap-4 w-full">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"نام :"}
              htmlFor={"name"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"text"}
              id={"name"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col flex-1">
            <Label
              innerText={"نام خانوادگی :"}
              htmlFor={"lastName"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"text"}
              id={"lastName"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex flex-col flex-1">
            <Label
              innerText={"تاریخ تحویل :"}
              htmlFor={"date"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"date"}
              id={"date"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col flex-1">
            <Label
              innerText={"تلفن همراه :"}
              htmlFor={"telephone"}
              className="block text-gray-700 font-bold mb-2"
            />
            <Input
              type={"tel"}
              id={"telephone"}
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <Label
              innerText={"آدرس :"}
              htmlFor={"address"}
              className="block text-gray-700 font-bold mb-2"
            />
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="5"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="form-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            پرداخت
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalizeShoppingCart;
