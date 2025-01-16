import { createContext, useContext, useState,useEffect } from "react";
// import { create } from "../../server/models/user_models";
const AuthContext = createContext();
export const Context = ({ children }) => {

    const [token, settoken] = useState(localStorage.getItem("token"))
    const [user,setUser]=useState(null)
 // for setting the token in localstorgae

    const storageTokenInLS = (serverToken) => {
        return localStorage.setItem('token', serverToken)
    }

// checking if user logged in 
    let isLoggedIn= !!token;
    if(isLoggedIn===token){
        console.log("user logged in successfully")
    }


// removing the token => logging out
    const removeToken=()=>{
        settoken("");
        return localStorage.removeItem('token')
    }



    // useEffect(() => {
     
    //     userAthorization();
      
    // })
    
    // const userAthorization=async()=>{
    //     try {
    //          const response= await fetch({url:'http://localhost:5000/api/auth/user',
    //             method:'GET',
    //             headers:{
    //                 Authorization:`Bearer ${token}`
    //             },
            
    //     })  
    //     if(response.status===200){
    //         const data = await response.json();
    //         console.log("user data ",data)
    //         setuser(data)
    //     }
    //     } catch (error) {
    //         console.log(`error occured in context api authorization ${error}`)
    //     }
    // }

    const userAuthentication = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/auth/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          if (response.ok) {
            const data = await response.json();
    
            // our main goal is to get the user data 👇
            setUser(data.userData);
          } else {
            console.error("Error fetching user data");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        userAuthentication();
      }, []);
    
    return <AuthContext.Provider value={{storageTokenInLS,removeToken,isLoggedIn,user}}>
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