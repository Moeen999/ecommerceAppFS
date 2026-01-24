import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const fetchProductData = async () => {
    products.map((item, idx) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productData, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* produtc data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* products images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData?.image?.map((itemImg, idx) => (
              <img
                onClick={() => setImage(itemImg)}
                src={itemImg}
                key={idx}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 w-3/4">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData?.sizes?.map((item, idx) => (
                <button
                  onClick={() => setSelectedSize(item)}
                  className={`border cursor-pointer py-2 px-4 bg-red-100 ${item === selectedSize ? "border border-orange-500" : ""}`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-black text-white px-8 py-3 active:bg-gray-700 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this produtc.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            FOREVER is a modern e-commerce clothing brand built for those who
            value style, comfort, and quality. Our mission is to redefine
            everyday fashion by offering carefully curated collections that
            blend timeless design with contemporary trends. From casual wear to
            statement pieces, every product is crafted with attention to detail,
            premium fabrics, and lasting comfort.
          </p>
          <p>
            As a digital-first clothing app, FOREVER delivers a seamless
            shopping experience—making it easy to explore, choose, and shop
            fashion that truly lasts. We believe clothing is more than just what
            you wear; it’s how you express yourself.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
