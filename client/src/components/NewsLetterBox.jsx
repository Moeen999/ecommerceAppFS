const NewsLetterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Here is nothing dummy entire stuff is real and quality maintained.
        Matching the industry standards.
      </p>  
      <form className="w-full sm:w-1/2 flex text-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" className="w-full sm:flex-1 outline-none" placeholder="Enter your email."/>
        <button className="cursor-pointer bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
