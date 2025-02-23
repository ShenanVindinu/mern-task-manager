import {useState} from 'react';
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";

const PasswordInput = ({value, onChange, placeholder}) => {

    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="flex items-center w-full bg-transparent border-[1.5px] border-gray-300 px-5 py-2 rounded mb-3 focus-within:border-blue-500">
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"}
                className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
            />

            {isShowPassword ? (
                <FaRegEye
                    size={22}
                    className="text-primary cursor-pointer ml-3 hover:text-blue-500"
                    onClick={() => toggleShowPassword()}
                />
            ) : (
                <FaRegEyeSlash
                    size={22}
                    className="text-slate-400 cursor-pointer ml-3 hover:text-blue-500"
                    onClick={() => toggleShowPassword()}
                />
            )}
        </div>

    );
};

export default PasswordInput;