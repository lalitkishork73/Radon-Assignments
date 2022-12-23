import React, { useState } from 'react'
const input = `p-1 rounded-md bg-transparent border-b-2 text-white`;
const inputT = `text-red-500 text-sm p-1 bg-black rounded-xl `
const inputF = `absolute left-[-9999px]`

const Forminput = (props) => {
    const [focused, setUserFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setUserFocused(true);
    }

    return (
        <>
            <div className='flex flex-col gap-2 p-2'>
                <label htmlFor={inputProps.id}>{label}</label>
                <input
                    type="text"
                    {...inputProps}
                    className={input}
                    onBlur={handleFocus}
                    onChange={onChange}
                    onFocus={() => {
                        inputProps.name === "confirmPassword" && setUserFocused(true)
                    }}
                    focused={focused.toString()}
                />
                <span className={focused ? inputT : inputF}>{errorMessage}</span>
            </div>
        </>
    )
}

export default Forminput