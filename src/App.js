import CounterCtx from "./TASKS/CONTEXT/CounterCtx"
import Counter from "./TASKS/Counter"
import Reducer from "./TASKS/REDUCER/Reducer"
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
        {/* REDUCER */}
        <Reducer />
        </>
    )
}

export default App