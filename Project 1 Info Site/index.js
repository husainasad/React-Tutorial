
// Basic way
// const info = (
//     <div>
//         <img src="react-logo.svg" alt="react logo"width="80"></img>
//         <h1>Why React?</h1>
//         <ul>
//             <li>Reusable Components</li>
//             <li>Responsive</li>
//             <li>Maintained by Meta</li>
//             <li>Big Community</li>
//             <li>Framework of choice by majority of developers</li>
//         </ul>
//     </div>
// )

// functional way
function InfoComponent(){
    return (
        <div>
            <img src="react-logo.svg" alt="react logo"width="80"></img>
            <h1>Why React?</h1>
            <ul>
                <li>Reusable Components</li>
                <li>Responsive</li>
                <li>Maintained by Meta</li>
                <li>Big Community</li>
                <li>Framework of choice by majority of developers</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<InfoComponent/>, document.getElementById("root"))