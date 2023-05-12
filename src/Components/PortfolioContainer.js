import React, {useState} from "react";
import Aboutme from "./Aboutme";
import Header from "./Header";

const renderPage = () => {
    const[CurrentPage, SetCurrentPage] = useState('');

    const renderPage = () => {
         if(CurrentPage === 'Aboutme') {
            return <Aboutme/>;
         }
    }
}