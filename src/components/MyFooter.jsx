import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";
const MyFooter = () => {
  return (
    <>
    <div className="footer text-white pb-12">
    <section className="elasticthemes  text-center">
        <h6>@ElasticThemes</h6>
        <h2 className="mt-4 mb-20 text-black text-4xl">We're on Instagram!</h2>

        <div className="images justify-center gap-4 flex">
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg"
            alt=""
          />
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg"
            alt=""
          />
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg"
            alt=""
          />
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg"
            alt=""
          />
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg"
            alt=""
          />
          <img
            className="w-44 rounded-3xl"
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
            alt=""
          />
        </div>

        <button>See More Photos</button>
      </section>
      <div className="flex">
        <div className="up flex container py-12 mx-48 justify-between items-center">
          <div className="left cursor-pointer text-xl">ToyStore</div>
          <div className="medium">
            <ul className="flex gap-8 text-sm">
              <li>
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li>Catalog</li>
              <li>Delivery</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>
          <ul className="flex right">
              <li>
                <BsTwitter className="cursor-pointer" />
              </li>

              <li>
                <BsFacebook className="cursor-pointer" />
              </li>

              <li>
                <BsInstagram className="cursor-pointer" />
              </li>

              <li>
                <BsPinterest className="cursor-pointer" />
              </li>

              <li>
                <BsYoutube className="cursor-pointer" />
              </li>
            </ul>
        </div>
      </div>
        <div className="down pt-2 mx-48 text-xs justify-between flex">
            <div className="left">Created with love by <span className="underline cursor-pointer">Elactic Themes</span></div>
            
            
            <div className="right">
                <ul className="flex gap-4">
                    <li>Poewered by <span className="underline cursor-pointer">Webflow</span></li>
                    <li className="underline cursor-pointer">Style Guide</li>
                    <li className="underline cursor-pointer">Licensing</li>
                </ul>
            </div>
        </div> 
    </div>

    
    </>

  );
};

export default MyFooter;
