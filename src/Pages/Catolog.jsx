import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const Catolog = () => {
  return (
    <>
      <div className="up bg-slate-50">
        <div className="pt-8 justify-center w-9/12 ml-60">
          <input
            type="text"
            className="container p-2 py-3 px-8 rounded-3xl"
            placeholder="Home Catalog"
          />
        </div>
      </div>

      <section className="alltoys bg-slate-50 py-8">
        <div className="title pb-8 flex w-9/12 ml-[15.5rem] justify-between">
          <h2 className="text-2xl">All Toys</h2>
          <ul className="flex gap-8 items-center">
            <li>
              <button className="text-white">All Toys</button>
            </li>
            <li>Wooden Toys</li>
            <li>Stuffed Animals</li>
          </ul>
        </div>
        <div className="line w-9/12 mx-auto">
          <div className="icline"></div>
        </div>

        <div className="cards gap-8 mt-12 w-8/12 mx-auto flex-wrap justify-between flex">
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Teddy Bear</h5>
            <button className="text-xs">$ 30.00 USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Happy Flower</h5>
            <button className="text-xs">$ 38.00 USD</button>
          </div>
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Mega Plush Toy</h5>
            <button className="text-xs">$ 38.00 USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Lift Machine</h5>
            <button className="text-xs">$ 24.00 USD</button>
          </div>
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Cute Dog</h5>
            <button className="text-xs">$ 24.00 USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Wodden Camera</h5>
            <button className="text-xs">$ 32.00 USD</button>
          </div>
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Little Rabbit</h5>
            <button className="text-xs">$ 16.00 USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png"
              alt=""
            />
            <h5 className="text-sm py-2">Little Friend</h5>
            <button className="text-xs">$ 27.00 USD</button>
          </div>
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Christmas Deer</h5>
            <button className="text-xs">$ 19.00 USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Rainbow Truck</h5>
            <button className="text-xs">$ 28.00USD</button>
          </div>
          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Pluto Yellow Dog</h5>
            <button className="text-xs">$ 28.00USD</button>
          </div>

          <div className="card bg-white py-6 px-8 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Happy Dog</h5>
            <button className="text-xs">$ 30.00USD</button>
          </div>
          <div className="card bg-white py-4 px-6 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Caterpillar</h5>
            <button className="text-xs">$ 18.00USD</button>
          </div>

          <div className="card bg-white py-4 px-6 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Grey Elephant</h5>
            <button className="text-xs">$ 45.00USD</button>
          </div>
          <div className="card bg-white py-4 px-6 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min-p-800.png"
              alt=""
            />
            <h5 className="text-sm py-2">Wooden Tractor</h5>
            <button className="text-xs">$ 2.00USD</button>
          </div>

          <div className="card bg-white py-4 px-6 rounded-2xl text-center">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min-p-500.png"
              alt=""
            />
            <h5 className="text-sm py-2">Funny Clown</h5>
            <button className="text-xs">$ 36.00USD</button>
          </div>
        </div>

        <div className="search-2 my-12 container p-12 items-center mx-auto flex">
          <div className="left flex items-center max-w-[450px]">
            <FaPaperPlane className="icon mr-4" />
            <div className="text-2xl">
              Subscribe to our newsletter & get <span>10% discount!</span>
            </div>
          </div>

          <div className="right flex">
            <input
              className="mr-12 w-[400px]"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="text-white">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catolog;
