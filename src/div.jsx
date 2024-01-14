import React from "react";
import styled,{ css } from "styled-components"

export default function Page() {
return(
        <What>
        <gradient></gradient>
        <h1>HOW ARE YOU SIR! C</h1>
        <p>let's continue this website and make it a project to show off</p>
        </What>
    )
}

const What = styled.div`
    font-family: "Spline Sans Mono", monospace; 
    font-weight: bold;
    font-size: 20px;

    position: relative;
    top: 1000px;
    left: 100px;

h1{
    color: white;
}
p{
    color: white;
}

`
// let's do this thing in styled components and learn some new things apart from tradintional css. do DSA and other projects with this.
// figure out how you can use this div to work as a gradient.
const gradient = styled.div`
    background: linear-gradient(
        180deg,
        #0e1129 ,
        #ffffff
    )

`