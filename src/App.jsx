import React, { useState } from 'react'
import logo from "./assets/logo.png"
import "./assets/fontawesome-free-6.7.2-web/fontawesome-free-6.7.2-web/css/all.min.css"
import { Link, Router } from 'react-router-dom';

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const candidates = [
    { id: 1, name: "Abduqodirov Ulug'bek", votes: 522, class: "10 A" },
    { id: 2, name: "Aliyev Bekzod", votes: 489, class: "10 B" },
    { id: 3, name: "Karimova Madina", votes: 470, class: "10 C" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
    { id: 4, name: "Ismoilov Jasur", votes: 455, class: "10 D" },
  ];

  const toggleInfo = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className='w-full h-screen gap-2 flex justify-between p-3 bg-slate-200'>
        <div className="discussion-bar w-1/3 h-full overflow-hidden rounded-lg bg-white flex flex-col shadow-xl">
          <div className="bar-top shadow-lg z-50 w-full flex items-center px-5 font-semibold h-10 bg-white  border-gray-600" style={{ borderBottom: "1px solid gray" }}>
            <h3 className="text-gray-700 text-xl">Yillik reyting  muhokama</h3>
          </div>
          <div className="message-table  overflow-auto w-full h-full relative flex flex-col">
            <div className="messages p-3 gap-3 flex flex-col w-full h-full ">

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[100%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-cyan-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>

              <div className="message-body max-w-[90%] w-max flex items-end gap-2">
                <img src={logo} alt="" className='w-8 h-8' />
                <div className={`message-box max-w-1/2 flex flex-col gap-3 rounded-lg rounded-bl-none bg-slate-200 p-2 transition-all duration-300 hover:shadow-lg cursor-pointer`}>
                  <span className="name text-gray-700 font-semibold">John Doe</span>
                  <span className="text-md text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus quam tenetur ea facilis ullam eaque molestias consectetur, nostrum nisi tempora! Voluptatem nesciunt dolor perspiciatis odit corporis. Magni, quam eligendi?</span>
                </div>
              </div>
            </div>


          </div>

          <div className="w-full h-max py-1 sticky bottom-0 left-0 text-send-field flex relative items-center">
            <input type="text" name="" placeholder='Xabar kiriting' id="" className="w-full max-w-[100%] h-full p-2 outline-none px-5 text-gray-700" />
            <div className="send-btn w-10 h-10 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg flex items-center justify-center bg-blue-400 absolute right-5">
              <i className="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>

        <div className="main-bar relative w-full h-full overflow-hidden rounded-lg bg-white flex flex-col shadow-xl">
          <div className="bar-top w-full h-max px-5 py-3 shadow-xl flex items-center">
            <h3 className="text-gray-700 font-semibold  text-xl">Yillik reyting.</h3>
          </div>
          <div className="ratings overflow-auto w-full h-full relative p-3 flex flex-col items-center gap-3">
            {candidates.map((candidate, index) => (
              <div key={candidate.id} className="candidate-data w-full flex flex-col relative">
                <div
                  className={`${index===0?"rate-1":index===1?"rate-2":index===2?"rate-3":"bg-gray-300"} w-full h-20 rounded-lg flex items-center px-10 py-2 gap-5 transition-all duration-300 cursor-pointer hover:shadow-xl`}
                  onClick={() => toggleInfo(index)}
                >
                  <span className="t-r text-white font-semibold italic text-5xl">{index + 1}.</span>
                  <span className="full-name text-3xl italic text-white">{candidate.name}</span>
                  <span className="text-white text-xl ml-20">Ovozlar: {candidate.votes}</span>
                  <button className="btn absolute right-20 px-4 py-2 bg-yellow-500 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                    Ovoz berish
                  </button>
                </div>

                <div
                  className={`candidate-info w-[98%] overflow-hidden shadow-xl rounded-b-xl p-3 flex flex-col m-auto transition-all duration-500 ${openIndex === index ? "h-auto opacity-100" : "h-0 opacity-0"
                    }`}
                >
                  <span className="text-gray-700 text-xl font-semibold">
                    Sinf: <span className="font-normal">{candidate.class}</span>
                  </span>
                  <span className="text-gray-700 text-xl font-semibold">
                    Ma'lumot: <span className="font-normal">Lorem ipsum dolor sit amet...</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="box absolute w-max px-3 h-15 bg-white rounded-xl shadow-xl flex items-center justify-center bottom-5 left-5">
            {/* <span className="text-gray-700 font-semibold text-lg">Qolgan ballar: 2</span> */}
            <span className="text-gray-700 font-semibold text-lg">Ovoz berish uchun <Link className='text-yellow-500 underline' to='/auth'>Tizimga kiring.</Link></span>
          </div>
        </div>
      </div>
  )
}
