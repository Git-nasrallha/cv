import React from 'react';
import styled from "styled-components";

const ProgrammingSkills = (props) => {
    const {programmingLanguage}=props;
    return (
        <Programming>
            <h3 className="title">Programming Language</h3>
            <ul>
                {
                    programmingLanguage && programmingLanguage.map((lang,index)=>{
                       return <li key={index}> {lang} </li>
                    })
                }
            </ul>
        </Programming>
    )
}

export default ProgrammingSkills;

const Programming=styled.div`
padding-bottom:30px;
    ul{
        list-style-type: square;
        li{
            margin-top:15px;
            margin-left:20px;
        }
    }
`
