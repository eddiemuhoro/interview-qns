import CounterCtx from "./TASKS/CONTEXT/CounterCtx"
import Counter from "./TASKS/Counter"


function App() {
    return (
        <>
        
        <h2>Props</h2>
        {/* USING PROPS */}
        <Counter />
        {/* USING CONTEXT */}
        <CounterCtx />
        </>
    )
}

export default App