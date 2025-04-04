import React, { useState } from 'react'
import Select from 'react-select';

export default function Auth() {
    const users = [
        { id: 1, name: "Abduqodirov Ulug'bek", class: 10 },
        { id: 2, name: "Aliyev Bekzod", class: 11 },
        { id: 3, name: "Karimova Madina", class: 9 },
        { id: 4, name: "Ismoilov Jasur", class: 9 },
        // Boshqa foydalanuvchilarni qo'shing
    ];

    const [selectedUser, setSelectedUser] = useState(null);

    const options = users.map((user) => ({
        value: user.id,
        label: user.name,
    }));

    const handleChange = (selectedOption) => {
        setSelectedUser(selectedOption);
    };
    return (
        <div className='w-full h-screen bg-slate-200 flex items-center justify-center'>
            <div className="enter-box w-1/3 h-1/2 bg-white rounded-xl shadow-2xl flex flex-col items-center py-3">
                <h3 className='text-3xl font-semibold text-gray-700'>Login</h3>
                <form action="" className="w-full px-5 mt-10 flex flex-col gap-3">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="school" className="text-gray-700">Maktabni tanlang:</label>
                        <select name="" id="" className='w-full border-2 rounded-xl border-gray-500 text-gray-700' required>
                            <option value="">Tanlang</option>
                            <option value="halima_xudoyberdiyeva">Halima Xudoyberdiyeva nomidagi ijod maktabi</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="username" className="text-gray-700">F.I.Sh kiriting:</label>
                        <Select
                            id="username"
                            value={selectedUser}
                            onChange={handleChange}
                            options={options}
                            className="w-full text-gray-700"
                            placeholder="Foydalanuvchi tanlang..."
                            required
                        />
                    </div>

                    <span className="text-gray-700 text-xl">Sinf: {users.filter((user) => user.id === selectedUser?.value)[0]?.class}</span>

                    <input
                        type="submit"
                        value="Kirish"
                        className="w-max px-10 py-2 m-auto rounded-lg cursor-pointer text-3xl font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                    />
                </form>
            </div>
        </div>
    )
}
