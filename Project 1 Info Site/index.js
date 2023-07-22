
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
// function InfoComponent(){
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="react-logo.svg" alt="react logo"width="80"></img>
//                 </nav>
//             </header>
//             <h1>Why React?</h1>
//             <ul>
//                 <li>Reusable Components</li>
//                 <li>Responsive</li>
//                 <li>Maintained by Meta</li>
//                 <li>Big Community</li>
//                 <li>Framework of choice by majority of developers</li>
//             </ul>
//             <footer>
//                 <small>© 2023 Husain Development. All rights reserved</small>
//             </footer>
//         </div>
//     )
// }

// ReactDOM.render(<InfoComponent/>, document.getElementById("root"))

function HeaderComponent(){
    return (
        <header>
            <nav className="nav-bar">
                <img className= "nav-logo" src="react-logo.svg" alt="react logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function InfoComponent(){
    return (
        <div>
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

function FooterComponent(){
    return (
        <footer>
            <div className="foot-bar">
                © 2023 Husain Development. All rights reserved
            </div>
        </footer>
    )
}

function PageContent(){
    return (
        <>
            <HeaderComponent/>
            <InfoComponent/>
            <FooterComponent/>
        </>
    )
}

ReactDOM.render(<PageContent/>, document.getElementById("root"))