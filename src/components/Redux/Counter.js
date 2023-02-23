import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../app/features/Counter/actions";

const Counter = () => {
 let {count} = useSelector(state => state.counter)
 const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>Latihan Tombol Counter Dengan Redux</h1><br/><br/>
            <div className="btn">
            <button onClick={() => dispatch(decrementWithCheckingAction(1))} >-</button>
            {' '}<span>{count}</span>{' '}
            <button onClick={() => dispatch(increment(1))}>+</button>
            </div>
        </div>    
        )
}

export default Counter;