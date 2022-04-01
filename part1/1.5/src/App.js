const Header = (props) => {
    return (
        <h1>{props.data.name}</h1>
    )

}
const Content = (props) => {
    return (
        <div>
            <p>{props.data.parts[0].name} {props.data.parts[0].exercises}</p>
            <p>{props.data.parts[1].name} {props.data.parts[1].exercises}</p>
            <p>{props.data.parts[2].name} {props.data.parts[2].exercises}</p>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.data.parts.map(p => p.exercises).reduce((p, c) => p + c, 0)}</p>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development: Part 1.1 - Ex 1.5',
        parts: [
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
    }

    return (
        <div>
            <Header data={course}/>
            <Content data={course}/>
            <Total data={course}/>
        </div>
    )
}
export default App