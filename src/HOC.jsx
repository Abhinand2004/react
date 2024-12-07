import React from "react";


const WithLoader=(WrappedComponent)=>{
    return function WithLoaderComponent({isLoading,...props}){
if (isLoading) {
    return <div>Loading....</div>
}
return <WrappedComponent {...props}/>
    }
}
export default WithLoader