import React, { useState } from 'react';
import './App.css';

const App = () => {
  const menuList = [
    {
      name: 'Buttermilk Pancakes',
      price: 18.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-1.jpeg',
      type: 'breakfast',
    },
    {
      name: 'Diner Double',
      price: 13.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-2.jpeg',
      type: 'lunch',
    },
    {
      name: 'Godzilla Milkshake',
      price: 6.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-3.jpeg',
      type: 'dinner',
    },
    {
      name: 'Egg Attack',
      price: 8.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-4.jpeg',
      type: 'breakfast',
    },
    {
      name: 'Country Delight',
      price: 18.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-5.jpeg',
      type: 'lunch',
    },
    {
      name: 'American Classic',
      price: 1.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-6.jpeg',
      type: 'breakfast',
    },
    {
      name: 'Bacon Overflow',
      price: 8.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-7.jpeg',
      type: 'dinner',
    },
    {
      name: 'Oreo Dream',
      price: 1.99,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      image: '/images/item-8.jpeg',
      type: 'shakes',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const buttons = ['All', 'Breakfast', 'Lunch', 'Shakes', 'Dinner'];

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuList = selectedCategory === 'All'
    ? menuList
    : menuList.filter(item => item.type.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="text-center my-5">
          <h1 className=" mb-3 no-underline text-3xl font-bold">Our Menu</h1>
          <hr className=" border-t-4 border-amber-500 w-1/12 m-auto mb-6"></hr>
          {buttons.map((category) => (
            <button
              key={category}
              className={`bg-transparent ml-2 hover:bg-amber-500 text-f59e0b font-semibold hover:text-white py-2 px-4 border ${
                selectedCategory === category ? ' border-black bg-slate-200 border-spacing-2' : 'border-amber-500 text-amber-500'
              } rounded-lg shadow-xl`}
              onClick={() => handleButtonClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {filteredMenuList.map((item, index) => (
            <div key={index} className="grid gap-4 grid-flow-col">
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="w-52 h-36 object-cover border-amber-500 border-2 rounded-md"
                />
              </div>
              <div>
                <u className="flex justify-between">
                  <b className="tracking-widest">{item.name}</b>
                  <b className="text-sm text-amber-500 pl-3">${item.price}</b>
                </u>
                <p className="text-stone-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;