import {createStore} from "redux";

console.log("hello world");

const incrementCount = ({incrementBy=1}={})=>{
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementCount = ({decrementBy=1}={})=>{
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const setCount = ({count}={})=>{
    return {
        type: 'SET',
        count: count
    }

}

const resetCount = ()=>{
    return {
        type: 'RESET'
    }

}

const countReducer = (state={count:0}, action)=>{
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = action.incrementBy;
            console.log(incrementBy);
            return {count: state.count + incrementBy};

        case 'DECREMENT':
            const decrementBy = typeof (action.decrementBy)==='number' ? action.decrementBy: 1;
            return {count: state.count - decrementBy};

        case 'RESET':
            return {count: 0};

        case 'SET':
            return {count: action.count};

        default:
            return state;
    }

}

const store = createStore(countReducer);



const unsubscribe = store.subscribe (()=>{
    console.log(store.getState());
});

store.dispatch({
    type:'INCREMENT',
    incrementBy: 5

    }
);


store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:10}));



store.dispatch(incrementCount({incrementBy:80}));

store.dispatch(setCount());


