
import React from 'react'

const Customstyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#1f2937', // Tailwind's bg-gray-800
    borderColor: '#4b5563',     // border-gray-600
    padding: '0.25rem',         // p-1
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#1f2937', // bg-gray-800
    color: 'white',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused
      ? '#374151' // bg-gray-700 on hover
      : '#1f2937',
    color: 'white',
    cursor: 'pointer',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'white',
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#4b5563', // bg-gray-600
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: 'white',
  }),
};


export default Customstyles