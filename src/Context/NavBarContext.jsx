/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const NavBarContext = createContext();

const AppProvider = ({ children }) => {
    const [open, setOpen] = useState({
        about: false,
        brise: false,
        attatchments: false,
    });

    return (
        <NavBarContext.Provider value={{ open, setOpen }}>
            {children}
        </NavBarContext.Provider>
    );
};
export {NavBarContext};
export default AppProvider;