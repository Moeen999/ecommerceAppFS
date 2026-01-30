import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { serverUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [inputData, setInputData] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    sizes: [],
    bestseller: false,
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    const { name, type, value, files, checked } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSizeClick = (size) => {
    setInputData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      inputData.image1 && formData.append("image1", inputData.image1);
      inputData.image2 && formData.append("image2", inputData.image2);
      inputData.image3 && formData.append("image3", inputData.image3);
      inputData.image4 && formData.append("image4", inputData.image4);

      formData.append("name", inputData.name);
      formData.append("description", inputData.description);
      formData.append("category", inputData.category);
      formData.append("subCategory", inputData.subCategory);
      formData.append("price", inputData.price);
      formData.append("bestseller", inputData.bestseller);

      formData.append("sizes", JSON.stringify(inputData.sizes));
      setIsAdding(true);
      const res = await axios.post(serverUrl + "/api/product/add", formData, {
        headers: { token },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setInputData({
          image1: null,
          image2: null,
          image3: null,
          image4: null,
          name: "",
          description: "",
          category: "Men",
          subCategory: "Topwear",
          price: "",
          sizes: [],
          bestseller: false,
        });
        setIsAdding(false);
      } else {
        toast.error(res.data.message);
        setIsAdding(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setIsAdding(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
        <p>Upload Images</p>
        <div className="flex gap-2">
          {["image1", "image2", "image3", "image4"].map((img) => (
            <label key={img} htmlFor={img}>
              <img
                className="w-20"
                src={
                  inputData[img]
                    ? URL.createObjectURL(inputData[img])
                    : assets.upload_area
                }
                alt=""
              />
              <input
                type="file"
                hidden
                id={img}
                name={img}
                onChange={handleInputChange}
              />
            </label>
          ))}
        </div>
      </div>

      <input
        name="name"
        value={inputData.name}
        onChange={handleInputChange}
        placeholder="Product name"
        className="w-full px-3 py-2 mt-4"
      />

      <textarea
        name="description"
        value={inputData.description}
        onChange={handleInputChange}
        placeholder="Product description"
        className="w-full px-3 py-2 mt-2"
        required
      />

      <div className="flex flex-col gap-4 mt-3">
        <select
          name="category"
          value={inputData.category}
          onChange={handleInputChange}
          className="px-3 py-2"
        >
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
        </select>

        <select
          name="subCategory"
          value={inputData.subCategory}
          onChange={handleInputChange}
          className="px-3 py-2"
        >
          <option>Topwear</option>
          <option>Bottomwear</option>
          <option>Winterwear</option>
        </select>

        <input
          type="number"
          name="price"
          value={inputData.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="px-3 py-2 w-28"
        />
      </div>

      <div className="mt-3">
        <p>Product sizes</p>
        <div className="flex gap-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <p
              key={size}
              onClick={() => handleSizeClick(size)}
              className={`px-3 py-1 cursor-pointer ${
                inputData.sizes.includes(size)
                  ? "bg-pink-200 text-black"
                  : "bg-slate-200"
              }`}
            >
              {size}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <input
          type="checkbox"
          name="bestseller"
          id="bestseller"
          checked={inputData.bestseller}
          onChange={handleInputChange}
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button
        disabled={isAdding}
        className={`mt-4 bg-black text-white px-6 py-2 ${isAdding ? "cursor-not-allowed" : ""}`}
        type="submit"
      >
        {isAdding ? "ADDING..." : "ADD"}
      </button>
    </form>
  );
};

export default Add;
