function Product({ product: { title, price, description, category, image } }) {
  return (
    <div className="flex ">
      <div className="w-5/12">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-contain bg-no-repeat w-full h-full "
        ></div>
      </div>
      <div className="w-7/12 ">
        <h1 className="">{title.substr(0, 50)}</h1>
        <h3 className="">{category}</h3>
        <p className="">{price}$</p>
        <div className="">{description.substr(0, 100)}</div>
      </div>
    </div>
  );
}
export default Product;
