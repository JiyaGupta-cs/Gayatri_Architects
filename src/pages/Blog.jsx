import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import './Blog.css'; // Import custom CSS for animations


const Blog = () => {
  const blogCards = [
    { id: 1, title: 'Blog Post 1', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolor amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolemque ipsa blanditiis obcaecati deleniti qui a cum quasi officia.',img:'https://via.placeholder.com/129x130.png?text=Image+1' },
    { id: 2, title: 'Blog Post 2', content: 'Lorem ipsum, dolor s amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolit amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit doloremque ii a cum quasi officia. 2',img:'https://via.placeholder.com/129x130.png?text=Image+1' },
    { id: 3, title: 'Blog Post 3', content: 'Lorem ipsum, dolor si amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolt amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit doloremque ipsa a cum quasi officia. 3',img:'https://via.placeholder.com/129x130.png?text=Image+1' },
    { id: 4, title: 'Blog Post 4', content: 'Lorem ipsum, dolor sit a amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolmet consec a cum quasi officia. 4',img:'https://via.placeholder.com/129x130.png?text=Image+1' },
    { id: 5, title: 'Blog Post 5', content: 'Lorem ipsum, dolor sit am amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dolet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit doloremque ipsaa cum quasi officia. 5' ,img:'https://via.placeholder.com/129x130.png?text=Image+1'},
    { id: 6, title: 'Blog Post 6', content: 'Lorem ipsum, dolor sit amet amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dol amet consectetur adipisicing elit. Nam rerum beatae ipsum corrupti nostrum facilis, facere ea asperiores, vitae velit dol consecta cum quasi officia. 6' ,img:'https://via.placeholder.com/129x130.png?text=Image+1'},
  ];

  const BlogCardCarousel = () => {
    const [currentSet, setCurrentSet] = useState(0);

    const handleNext = () => {
      setCurrentSet(1);
    };

    const handlePrevious = () => {
      setCurrentSet(0);
    };

    return (
      <div className="relative w-screen overflow-hidden text-black">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${    currentSet==0?7.8:-50     }%)`, width: '200%' }}
        >
          {/* First group of cards */}
          <div className="flex w-full gap-16">
            {blogCards.slice(0, 3).map(card => (
              <div key={card.id} className="w-[26vw] p-8   bg-[#e6d4a6] flex-shrink-0 flex flex-col gap-8">
                <img className='w-full h-[35vh]' src={card.img} alt="" />
                <p>{card.content}</p>
              </div>
            ))}
          </div>
          {/* Second group of cards */}
          <div className="flex w-full gap-16">
            {blogCards.slice(3, 6).map(card => (
              <div key={card.id} className="w-[24vw] p-8   bg-[#e6d4a6] flex-shrink-0 flex flex-col gap-8">
                <img className='w-full h-[35vh]' src={card.img} alt="" />
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={ (currentSet=='0'? `right-0 `: `left-0 `)+`fixed bottom-8 flex justify-between px-4`}>
          {currentSet === 1 && (
            <button onClick={handlePrevious} className="text-8xl text-[#C59D37] bg-transparent text-white py-2 px-4 rounded-md ">
              &lt;
            </button>
          )}
          {currentSet === 0 && (
            <button onClick={handleNext} className="text-8xl text-[#C59D37] bg-transparent text-white py-2 px-4 rounded-md ">
              &gt;
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="md:min-h-screen w-screen bg-[#f1e7cd] overflow-hidden">
      <Navbar />
      <div className="flex flex-col px-8 md:px-24 py-12 min-h-[80vh] gap-8 items-center justify-around">
        <h2 className="text-[#7c7b7b] text-4xl">Blog</h2>
        <div className='hidden md:block'>
        <BlogCardCarousel />
        </div>
        {/* Mobile Component */}
        <div className='md:hidden'>
        <div className="flex flex-col px-4 gap-8 text-black">
            {blogCards.map(card => (
              <div key={card.id} className="w-full p-6   bg-[#e6d4a6] flex-shrink-0 flex flex-col gap-8">
                <img className='w-full h-[15vh] object-cover' src={card.img} alt="" />
                <p>{card.content.slice(0,100) }.....</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
