import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form>
      <div className="flex flex-col items-start w-full gap-3">
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          <label htmlFor="iamge1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" hidden id="iamge1" />
          </label>
          <label htmlFor="iamge2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" hidden id="iamge2" />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" hidden id="iamge3" />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" hidden id="image4" />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          type="text"
          placeholder="Enter name here..."
          className="w-full max-w-[500px] px-3 py-2"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          type="text"
          placeholder="Describe product here..."
          className="w-full max-w-[500px] px-3 py-2"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select className="w-full px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product price</p>
          <input
            type="number"
            placeholder="13$"
            className="w-full px-3 py-2  sm:w-[120px]"
          />
        </div>
      </div>

      <div>
        <p>Product sizes</p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">S</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">M</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">L</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XL</p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
