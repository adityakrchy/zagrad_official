import React, { useState } from 'react';

const ComboTshirt = () => {
  const [tshirts, setTshirts] = useState([
    { id: 1, size: '', color: '' },
    { id: 2, size: '', color: '' },
    { id: 3, size: '', color: '' },
    { id: 4, size: '', color: '' },
  ]);

  const allSizes = ['Select Size','S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL']; // Add more sizes as needed

  const allColors = ['Select Color','Red', 'Blue', 'Green', 'Black', 'Yellow', 'Purple', 'Orange', 'Pink', 'Brown', 'Gray', 'Teal', 'Indigo'];

  const handleSizeChange = (id: number, newSize: string) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) =>
        tshirt.id === id ? { ...tshirt, size: newSize } : tshirt
      )
    );
  };

  const handleColorChange = (id: number, newColor: string) => {
    setTshirts((prevTshirts) =>
      prevTshirts.map((tshirt) =>
        tshirt.id === id ? { ...tshirt, color: newColor } : tshirt
      )
    );
  };

  return (
    <div className="pb-4">
      <h2 className="text-l font-bold mb-4">Pick Size & Color</h2>
      {tshirts.map((tshirt) => (
        <div
          key={tshirt.id}
          className={`mb-4 border-l-4 border-${tshirt.color.toLowerCase()}-500 pl-4`}
        >
          <p className="text-lg font-semibold">T-shirt {tshirt.id}</p>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Size:</label>
              <select
                value={tshirt.size}
                onChange={(e) => handleSizeChange(tshirt.id, e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              >
                {allSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Color:</label>
              <select
                value={tshirt.color}
                onChange={(e) => handleColorChange(tshirt.id, e.target.value)}
                className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-${tshirt.color.toLowerCase()}-700`}
              >
                {allColors.map((color) => (
                  <option key={color} value={color} className={`text-${color.toLowerCase()}-500`}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComboTshirt;
