import { createContext } from "react";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {




    const contextValue = {

    }
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default StorecontextProvider