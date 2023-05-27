import React from "react";
import "../Style.scss";
import { BsArrowRight, BsFillCaretRightFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className="center items-center flex justify-center text-center">
        <div className="card w-2/5 bg-white py-16 rounded-lg">
          <h5 className="font-semibold">Say Hello to ToyStore!</h5>
          <h3 className="py-4 text-4xl">Free Ecommerce Template for Webflow</h3>
          <button className="text-white p-4 px-8">Open Catalog</button>
        </div>
      </div>

      <section className="cards flex justify-center gap-12 pt-32">
        <div className="card-1 relative pl-60 pr-16 py-4 items-center flex">
          <img
            className="w-52 absolute bottom-12 left-8 h-52"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
            alt=""
          />
          <div className="text ml-16">
            <h5 className="text-white text-3xl">Stuffed Animals</h5>
            <button className="bg-white">Shop Now</button>
          </div>
        </div>

        <div className="card-2 relative py-12 pl-12 pr-80 items-center flex pt-10">
          <div className="text">
            <h5 className="text-white text-3xl">Wooden Toys</h5>
            <button className="bg-white">Shop Now</button>
          </div>
          <img
            className="w-52 absolute bottom-8 right-0 h-52"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
            alt=""
          />
        </div>
      </section>

      <section className="animals container-fluid">
        <div className="title flex justify-between px-44 pt-12">
          <h2 className="text-3xl">Stuffed Animals</h2>
          <button className="font-semibold">
            See All Toys <BsArrowRight className="inline-block" />
          </button>
        </div>
        <div className="line my-8"></div>

        <div className="cards-2 pb-8 text-center flex justify-between mx-32">
          <div className="card my-8 card-1">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
              alt=""
            />
            <h5>Teddy Bear</h5>
            <button>$ 30.00 USD</button>
          </div>

          <div className="card my-8 card-2">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png"
              alt=""
            />
            <h5>Mega Plusg Toy</h5>
            <button>$ 38.00 USD</button>
          </div>

          <div className="card my-8 card-3">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png"
              alt=""
            />
            <h5>Cute Dog</h5>
            <button>$ 24.00 USD</button>
          </div>

          <div className="card my-8 card-4">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png"
              alt=""
            />
            <h5>Little Friend</h5>
            <button>$ 27.00 USD</button>
          </div>
        </div>
      </section>

      <section className="wooden-toys container-fluid pb-20 px-28 justify-between">
        <div className="title flex justify-between mx-4 pt-12">
          <h2 className="text-3xl">Wooden Toys</h2>
          <button className="font-semibold">
            See All Toys <BsArrowRight className="inline-block" />
          </button>
        </div>
        <div className="cards justify-between mx-8 flex">
          <div className="card my-8">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png"
              alt=""
            />
            <h5>Happy Flower</h5>
            <button>$ 38.00 USD</button>
          </div>

          <div className="card my-8">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png"
              alt=""
            />
            <h5>Lift Machine</h5>
            <button>$ 24.00 USD</button>
          </div>

          <div className="card my-8">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png"
              alt=""
            />
            <h5>Wooden Camera</h5>
            <button>$ 32.00 USD</button>
          </div>

          <div className="card my-8">
            <img
              className="w-52"
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png"
              alt=""
            />
            <h5>Little Rabbit</h5>
            <button>$ 16.00 USD</button>
          </div>
        </div>
      </section>

      <section className="our-story py-32">
        <div className="text-our-story text-center">
          <h6 className="font-semibold">About The Shop</h6>
          <h3 className="py-4 font-medium text-4xl">Watch Our Story</h3>
          <p>
            There is no magic formula to write perfect ad copy. It is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood
          </p>
        </div>
      </section>

      <section className="madefor py-32 container-fluid text-center">
        <h6>Made for Webflow</h6>
        <h3 className="">
          Simple & Colorful Ecommerce Template for Your Business
        </h3>
      </section>

      <section className="madefor-down pb-24 px-52">
        <div className="down items-center justify-between flex">
          <div className="text">
            <h3 className="text-4xl">Available for FREE!</h3>
            <div className="line my-6"></div>
            <p className="mb-4 mr-24">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <button>get in now!</button>
          </div>

          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt=""
          />
        </div>
      </section>

      <div className="bg-slate-50 pb-20">
        <div className="search bg-white items-center justify-between mx-52 flex">
          <div className="left flex items-center max-w-[450px]">
            <FaPaperPlane className="icon" />
            <div className="text-2xl">
              Subscribe to our newsletter & get <span>10% discount!</span>
            </div>
          </div>

          <div className="right flex">
            <input
              className="mr-12 w-80"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="text-white">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
