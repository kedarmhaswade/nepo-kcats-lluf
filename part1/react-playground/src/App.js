import * as PropTypes from "prop-types";

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
}

const Content = (props) => {
    return (
        <>
            <p>{props.parts[0]} {props.exercises[0]}</p>
            <p>{props.parts[1]} {props.exercises[1]}</p>
            <p>{props.parts[2]} {props.exercises[2]}</p>
        </>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises.reduce((p, c) => p + c, 0)}</p>
    )
}

Total.propTypes = {exercises: PropTypes.arrayOf(PropTypes.any)};
const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const parts = [part1, part2, part3]
    const exercises = [exercises1, exercises2, exercises3]
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts} exercises={exercises}/>
            <Total exercises={exercises}/>
        </div>
    )
}

export default App

// const Hello = (props) => {
//     return (
//         <div>
//             <p>
//                 Hello {props.name}, you are {props.age} years old
//             </p>
//         </div>
//     )
// }
//
// function Footer() {
//     return (
//         <div>
//             <p> Built by Kedar using React</p>
//             <p> <a href="https://reactjs.org"> learn react</a></p>
//         </div>
//     );
// }
//
// const App = () => {
//     const name = 'Larry'
//     const age = 10
//
//     return (
//         <>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10} />
//             <Hello name={name} age={age} />
//             <Footer />
//         </>
//     )
// }
// export default App
// // import logo from './logo.svg';
// // import './App.css';
// //
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// //
// // export default App;
