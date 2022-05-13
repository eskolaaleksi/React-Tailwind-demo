function Product({ product: { title, price, description, category, image } }) {
  return (
    // bg-white w-full mb-5 shadow-sm rounded-lg dark:bg-gray-300 group hover:shadow-2xl transition-shadow duration-300
    <div className="flex ">
      {/* p-2 overflow-hidden dark:bg-white rounded-tl-lg rounded-bl-lg*/}
      <div className="w-5/12">
        {/*bg-center transition-transform duration-300 group-hover:transform group-hover:scale-125*/}
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-contain bg-no-repeat w-full h-full "
        ></div>
      </div>
      {/*p-5*/}
      <div className="w-7/12 ">
        {/*md:text-2xl*/}
        <h1 className="">{title.substr(0, 50)}</h1>
        {/*text-blue dark:text-gray-700*/}
        <h3 className="">{category}</h3>
        {/*text-blue-shock mt-4 text-xl md:text-4xl*/}
        <p className="">{price}$</p>
        {/*mt-4*/}
        <div className="">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
}
export default Product;
