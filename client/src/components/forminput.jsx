import React, { useState, useRef, useEffect } from 'react'
const input = `p-1 rounded-md bg-transparent border-b-2 text-white`;
const inputT = `text-red-500 text-sm p-1 bg-black rounded-xl `
const inputF = `absolute left-[-9999px]`

const Forminput = (props) => {
    const [focused, setUserFocused] = useState(false);
    const { label, errorMessage, onChange, id, userRef, ...inputProps } = props;

    console.log(focused);
   

    const handleFocus = (e) => {
        setUserFocused(true);
    }

    return (
        <>
            <div className='flex flex-col gap-2 p-2'>
                <label htmlFor={inputProps.id}>{label}</label>
                <input
                    type="text"
                    ref={userRef}
                    {...inputProps}
                    className={input}
                    onBlur={handleFocus}
                    onChange={onChange}
                    // aria-invalid={valid ? "false" : "true"}
                    
                    onFocus={() => {
                        inputProps.name === "confirmPassword" && setUserFocused(true)
                    }}
                    focused={focused.toString()}
                    autoComplete="off"
                />
                <span className={focused ? inputT : inputF}>{errorMessage}</span>
            </div>
        </>
    )
}

export default Forminput