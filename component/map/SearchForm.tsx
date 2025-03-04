'use client';

import React, { useState } from 'react';

const SearchForm = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e : any) => {
        e.preventDefault();
        setResult(`${start}에서 ${end}까지의 경로를 검색합니다.`);
    };

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">길 찾기</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="start" className="block text-gray-700 text-sm font-bold mb-2">
                        출발지
                    </label>
                    <input
                        type="text"
                        id="start"
                        value={start}
                        onChange={(e) => setStart(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="출발지를 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="end" className="block text-gray-700 text-sm font-bold mb-2">
                        도착지
                    </label>
                    <input
                        type="text"
                        id="end"
                        value={end}
                        onChange={(e) => setEnd(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="도착지를 입력하세요"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        길 찾기
                    </button>
                </div>
            </form>
            {result && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 border border-green-400 rounded">
                    {result}
                </div>
            )}
        </div>
    );
};

export default SearchForm;