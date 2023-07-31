// Step 1
// ReactDOM.render(<h1>Hello from React</h1>, document.getElementById("root"))


// Step 2
// ReactDOM.render(
//     <ul>
//         <li>List item 1</li>
//         <li>List item 2</li>
//     </ul>, document.getElementById("root"))


// Step 3
// function MainContent(){
//     return (
//         <h1>Testing Custom React component</h1>
//     )
// }

// ReactDOM.render(<MainContent/>, document.getElementById("root"))


// Step 4
// const navbar = (
//     <nav>
//         <h1>My Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))


// Step 5
const page = (
    <div>
        <p>This is element 1 which is a paragraph</p>
        <p>This is element 2 which is also a paragraph</p>
        <ul>
            <li>This is unordered list item 1</li>
            <li>This is unordered list item 2</li>
        </ul>
        <p>This is element 4 which is also a paragraph</p>
    </div>
)

// let parentElement = document.getElementById("root")
// parentElement.append(JSON.stringify(page))

ReactDOM.render(page, document.getElementById("root"))