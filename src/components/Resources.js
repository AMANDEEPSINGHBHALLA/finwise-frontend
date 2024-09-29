import React from 'react';
import EarlyAccessTemplate from './EarlyAccessTemplate';
import heroo from "../assets/images/books/heroo.png";
import join from "../assets/images/books/joined.png"
import { FaArrowRight } from "react-icons/fa";
// Book and guide data

const bookList = [
  {
    imageSrc: require("../assets/images/books/budget.png"),
    author: "By Arthur Gonzalez",
    title: "The Story of Success"
  },
  {
    imageSrc: require("../assets/images/books/blue.png"),
    author: "By Sabela Hupter",
    title: "A God Who Hate Women"
  },
  {
    imageSrc: require("../assets/images/books/father.png"),
    author: "By Glenna Berge",
    title: "My Dearest Darkest"
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    author: "By Gilberto Mills",
    title: "House of Sky and Breath"
  },
  {
    imageSrc: require("../assets/images/books/illness.png"),
    author: "By Dana Chambers",
    title: "The Illness Lesson"
  },
  {
    imageSrc: require("../assets/images/books/butch.png"),
    author: "By Suzanne Casey",
    title: "Treachery: Alpha Colony "
  },
];

const bookImages = [
  {
    imageSrc: require("../assets/images/books/budget.png"),
    title:"Budgeting"
  },
  {
    imageSrc: require("../assets/images/books/analysis.png"),
    title:"Stock Market"
  },
  
  {
    imageSrc: require("../assets/images/books/book2.png"),
    title:"Taxation"
  },
  {
    imageSrc: require("../assets/images/books/book3.png"),
    title:"Retirement Planning"
  },
  {
    imageSrc: require("../assets/images/books/book4.png"),
    title:"Smart with money"
  },
  {
    imageSrc: require("../assets/images/books/book1.png"),
    title:"Finance hacks"
  },
];

const guides = [
  {
    imageSrc: require("../assets/images/books/guide1.png"),
    author:"By Arthur Gonzalez",
    title:"A God Who Hates Women",
    about: ""
  },
  {
    imageSrc: require("../assets/images/books/guide2.png"),
    author:"By Sabela Hupter",
    title:"Hans Christian Andersen"
  },
  {
    imageSrc: require("../assets/images/books/guide3.png"),
    author:"By Alyce Kris",
    title:"Castle In The Sky"
  },

];

const Books = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="fin-head text-white pt-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 pl-[10%] ">
            <p className=' text-sm font-thin italic mb-[3%]'>Internationally Bestselling Book</p>
            <h1 className="text-5xl mb-4 font-semibold">2-Week Plan to</h1>
            <h1 className="text-5xl font-semibold mb-4"> Jump-Start</h1>
            <h1 className="text-5xl font-semibold mb-[8%]">Your Healing</h1>
            <p className="mb-6 pr-[30%] font-thin">
              Check out the new book by Dr. Martin to find out how to stay healthy and support your body.
            </p>
            <button className="bg-blue-900 text-white py-2 px-7 font-semibold hover:bg-blue-800">
              <div className=' flex '>
              Meet Our Bestsellers
              <FaArrowRight  className=' ml-2'/>
              </div>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={heroo} alt="Person" className=" pr-[10%] " />
           
          </div>
        </div>
      </section>
 {/* carousel section */}
   
 <div className=" p-14 flex flex-col items-center ">  
  <h2 className="font-bold text-black text-2xl text-center mb-[4%]">Browse by Category</h2> 
  <div className="container mx-auto">          
    <div className="flex justify-center space-x-6 overflow-x-scroll">
      {bookImages.map((bookImages, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center">
          <div className="w-28 h-28 mt-4 rounded-b-full overflow-hidden flex items-center justify-center">
              <img
                src={bookImages.imageSrc}
                alt={`Book ${index}`}
                className="max-w-full max-h-full object-cover"
              />
            </div>            
          </div>
          <div className="flex text-center mt-5 mb-[50%]">
            <h2>{bookImages.title}</h2>
          </div>
        </div>
      ))} 
    </div>
  </div>
</div>

{/* Promotion Section */}
<div>
<div className="finwise-back ml-[14%] mr-[14%] m text-black flex pt-10 h-auto px-10">

  <div className="mx-auto p-10 w-full flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2">
      <div className="flex mb-4">
        <h2 className="font-bold text-lg">100% off</h2>
        <h2 className="font-semibold ml-1 text-lg">on all guides</h2>
      </div>
      <h1 className="font-extrabold text-3xl">Free for all</h1>
      <h1 className="text-5xl mb-6 font-bold">Early members</h1>
      <button className="bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
        Get Now
      </button>
      </div>
       <div className="md:w-1/2 flex justify-center">
      <img src={join} className="h-auto w-[70%] max-w-full" />
       </div>
      </div>
       </div>

</div>

      {/* Book List Section */}
      <section className="mb-[8%] ml-[10%] w-[80%]">
  <h2 className="font-semibold text-black text-3xl p-12">New Arrivals</h2>
  <div className="container grid grid-cols-2 md:grid-cols-6 gap-1">
    {bookList.map((book, index) => (
      <div key={index} className="text-left">
        <img
          src={book.imageSrc}
          alt={`Book ${index}`}
          className="w-full h-24 object-cover mb-4" 
        />
        <p className="font-light italic text-sm">{book.author}</p>
        <h3 className="font-semibold">{book.title}</h3>
      </div>
    ))}
  </div>
</section>


      {/* Guides of the Day Section */}
      <div className="fin-back pt-[5%]">      
        <div className="container ">
         <div className=' flex'>
          <h2 className="text-black text-3xl font-bold ml-28"> Guides of the Day</h2>
          <h2 className="text-orange-800 text-3xl font-bold mb-8 pl-1"> {new Date().toLocaleDateString()}</h2>
          </div>
          <div className="grid grid-cols-1 ml-28 md:grid-cols-3 w-[85%]">
  {guides.map((guide, index) => (
    <div key={index} className="bg-white p-5 grid grid-cols-2 gap-6 items-center">
      
      <div className="w-full h-full">
        <img
          src={guide.imageSrc}
          alt={`Guide ${index}`}
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-500 italic">{guide.author}</p>
          <h2 className="font-bold text-xl text-black">{guide.title}</h2>
          <p className="text-gray-500 italic">About the book</p>
        </div>
        <button className="mt-6 bg-black text-white py-2 px-4 rounded font-semibold hover:bg-gray-800">
          Get Now
        </button>
      </div>
    </div>
  ))}
</div>

         </div>
      </div>
      <EarlyAccessTemplate />
    
    </div>
  );
};

export default Books;
