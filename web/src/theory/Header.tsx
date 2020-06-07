import React from 'react';
interface HeaderProps{
    title:string;
}
/* function Header(){
    return (
        <header>
            <h1>Ecoleta</h1>
        </header>
    );
} */

const Header: React.FC<HeaderProps> = (props)=>{
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;