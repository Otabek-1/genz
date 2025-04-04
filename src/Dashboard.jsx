import React, { useState } from 'react';

export default function Dashboard() {
  // State for storing which result is open
  const [openResult, setOpenResult] = useState(null);

  // Function to toggle the rating visibility for the selected result
  const toggleResult = (index) => {
    if (openResult === index) {
      // If the clicked result is already open, close it
      setOpenResult(null);
    } else {
      // Otherwise, open the clicked result
      setOpenResult(index);
    }
  };

  const results = [
    { name: 'Mehribonlik haftasi – Kim ko‘proq yordam berdi?' },
    { name: 'Yangi haftaning eng yaxshi rahbari?' },
    { name: 'Eng yaxshi loyiha g‘oyasi?' },
    { name: 'Yangi o‘quv dasturi?' },
  ];

  return (
    <div className='w-full h-screen bg-slate-200 p-5 flex flex-col gap-3'>
      <div className="new-week-form w-full h-max bg-white rounded-xl flex flex-col p-3 ">
        <h3 className="text-gray-700 text-2xl font-semibold">Yangi haftani rejalashtirish</h3>
        <form action="" className="w-full gap-3 flex flex-col mt-1">
          <div className="flex flex-col gap-1">
            <label htmlFor="week_name" className="text-gray-700 text-lg">Hafta nomi</label>
            <input
              type="text"
              id="week_name"
              className="w-1/2 py-2 px-3 border-2 border-gray-400 rounded-lg outline-none focus:border-blue-500 text-gray-700"
              placeholder='Namuna: Mehribonlik haftasi – Kim ko‘proq yordam berdi?'
            />
            <input
              type="submit"
              value="Saqlash"
              className="bg-blue-500 w-max px-3 py-2 text-xl rounded-lg mt-2"
            />
          </div>
        </form>
      </div>

      <div className="results w-full h-max bg-white rounded-xl flex flex-col p-3">
        <h3 className="text-gray-700 text-2xl font-semibold">Natijalar</h3>
        <div className="results mt-3 w-full flex flex-col gap-3">
          {results.map((result, index) => (
            <div key={index} className="result w-full flex flex-col">
              <div
                className="result-top w-full px-4 py-2 text-gray-700 bg-white text-xl font-semibold shadow-2xl rounded-lg cursor-pointer"
                onClick={() => toggleResult(index)} // Use dynamic index for each result
              >
                {result.name}
              </div>

              {/* Show rating if the result is open */}
              {openResult === index && (
                <div className="rating w-full h-max p-3 flex items-center">
                  <ul className="w-full h-max flex flex-col gap-3">
                    <li className="text-gray-700 text-lg flex items-end gap-5">1. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">2. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">3. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">4. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">5. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">6. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">7. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">8. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">9. Aliyev Vali 533ta ovoz</li>
                    <li className="text-gray-700 text-lg flex items-end gap-5">10. Aliyev Vali 533ta ovoz</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
