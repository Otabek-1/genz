import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

export default function Auth() {
    const [users, setUsers] = useState([]);
    const nav= useNavigate(null);

    useEffect(()=>{
        axios.get("http://localhost:1234/users")
        .then(res=>{
            setUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })
    },[])

    const [selectedUser, setSelectedUser] = useState(null);

    const options = users.map((user) => ({
        value: user.id,
        label: user.fullname,
    }));

    const handleChange = (selectedOption) => {
        setSelectedUser(selectedOption);
    };

    const login = () => {
        if (selectedUser) {
            window.localStorage.setItem('id', selectedUser.value); // only save the user ID, not the whole object
            nav("/");
        } else {
            console.log("Please select a user!");
        }
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
                            <option value="1">Halima Xudoyberdiyeva nomidagi ijod maktabi</option>
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
                    onClick={login}
                        type="submit"
                        value="Kirish"
                        className="w-max px-10 py-2 m-auto rounded-lg cursor-pointer text-3xl font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300"
                    />
                </form>
            </div>
        </div>
    )
}
