import { useEffect, useState, useRef, useCallback } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(12);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharaAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const ref = useRef(null);

  const passwordGerator = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbersAllowed) str += '0123456789';
    if (charsAllowed) str += "~`!@#$%^&*()_+-={}[]|:;'<>,.?/";

    let pass = '';
    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed]);

  const copyToClipBoard = () => {
    ref.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    passwordGerator();
  }, [length, numbersAllowed, charsAllowed, passwordGerator]);

  return (
<div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] via-[#2a2a3d] to-[#3b3b4f] flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/60 border border-gray-200 shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in-down">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Password Generator</h1>

        <div className="flex gap-2 mb-5 transition-all duration-300">
          <input
            type="text"
            value={password}
            ref={ref}
            readOnly
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <button
            onClick={copyToClipBoard}
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md transition-all duration-300"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700 font-medium">
          <div>
            <label className="flex justify-between mb-1">
              Length: <span className="text-blue-600 font-bold">{length}</span>
            </label>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="numbers"
              checked={numbersAllowed}
              onChange={() => setNumbersAllowed((prev) => !prev)}
              className="accent-purple-500 scale-110 transition duration-200"
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="chars"
              checked={charsAllowed}
              onChange={() => setCharaAllowed((prev) => !prev)}
              className="accent-pink-500 scale-110 transition duration-200"
            />
            <label htmlFor="chars">Include Special Characters</label>
          </div>

          <button
            onClick={passwordGerator}
            className="w-full mt-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-2 rounded-lg font-bold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
