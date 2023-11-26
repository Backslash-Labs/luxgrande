import React from "react";

const Header = (props:any) => {
    return (
        <div  className="h-[calc(100vh-30vh)]  bg-sauna bg-no-repeat bg-cover bg-center bg-gray-500 bg-blend-multiply text-center flex flex-col items-center justify-center">
            <h1 className="text-xl text-primary animate__animated animate__fadeIn">Trendy shop & spa</h1>
            <h2 className="text-4xl mt-4 animate__animated animate__fadeIn">{props.title}</h2>
          
        </div>
    );
    };

export default Header;
