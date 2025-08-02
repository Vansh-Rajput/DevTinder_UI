
import React, { useState } from 'react';
import Select from 'react-select';
import Customstyles from './utils/Customstyles';


const SelectSkills = ({selectedoptions,setselectedoptions}) => {

    const skilloptions = [
  { value: 'React', label: 'React' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'Next.js', label: 'Next.js' },
  { value: 'Express', label: 'Express' },
  { value: 'Docker', label: 'Docker' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'SpringBoot', label: 'SpringBoot' },
 { value: 'Java', label: 'Java' },
  { value: 'AI/ML', label: 'AI/ML' },
];

const handlechange=(selected)=>{
  if(selected.length>5)return;      //user could select 5 major skills at max
setselectedoptions(selected);
}


  return (
    <div className="relative z-0">

 {selectedoptions.length > 5 && (
<p style={{ color: 'red', fontSize: '12px' }}>Max 5 skills allowed.</p>
)}
<Select
    isMulti                 //means our selected items would be an array
    options={skilloptions}
    value={selectedoptions}
    onChange={handlechange}
    placeholder="Choose your Skills..."
    closeMenuOnSelect={false}
    styles={Customstyles}
/>

    </div>
  )
}

export default SelectSkills