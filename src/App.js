import CounterCtx from "./TASKS/CONTEXT/CounterCtx"
import Counter from "./TASKS/Counter"
import WordCounter from "./TASKS/setTineout/Test1"


function App() {
    return (
        <>
        
        <h2>Props</h2>
        {/* USING PROPS */}
        <Counter />
        {/* USING CONTEXT */}
        <CounterCtx />

        <WordCounter />
        </>
    )
}

export default App