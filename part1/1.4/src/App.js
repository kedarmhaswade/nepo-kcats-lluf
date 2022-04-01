const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )

}
const Content = (props) => {
    return (
        <div>
            <p>{props.parts[0].name} {props.parts[0].exercises}</p>
            <p>{props.parts[1].name} {props.parts[1].exercises}</p>
            <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.exercises.map(p => p.exercises).reduce((p, c) => p + c, 0)}</p>
    )
}
const App = () => {
    const course = 'Half Stack application development: Part 1 - Ex 1.4'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total exercises={parts}/>
        </div>
    )
}

export default App