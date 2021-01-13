import React from 'react';
import styled from "styled-components";


const JsFramwork = (props) => {
    const {jsFrams}=props;
    return (
        <Framwork>
            <h3 className="title"> js framework </h3>
            <ul>
                {
                    jsFrams && jsFrams.map((fram,index)=>{
                        return (
                            <li key={index}>
                                {fram}    
                            </li>
                        )
                    })
                }
            </ul>
        </Framwork>
    )
}

export default JsFramwork;

const Framwork=styled.div`
    ul{
        list-style-type: square;
        li{
            margin-top:10px;
            margin-left:20px;
        }
    }
`


