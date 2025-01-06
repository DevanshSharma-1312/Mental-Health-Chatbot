import { createContext, useContext } from "react";
// import { create } from "../../server/models/user_models";
const AuthContext = createContext();
export const Context = ({ children }) => {
    const storageTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }
    return <AuthContext.Provider value={storageTokenInLS}>
        {children}
    </AuthContext.Provider>
}

// export const useAuth = () => {
//     const authContextValue = useContext(Context);

//     try {
        
//         if (!authContextValue) {
//             console.log("error occured in wrapper class of context API")
//         }
//     } catch (error) {
//         console.log(error)
//     }

//     return authContextValue;
// }

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};