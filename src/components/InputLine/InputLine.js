import React, { useState } from "react";

const InputLine = props => {
    const [val, handleVal] = useState("");

    const ChangeValue = e => {
        let value = e.target.value;
        value = value.replace(/[^\d\s]/g, "");
        handleVal(value);
        props.ChangeAdjacency(props.index, value);
    };

    return (
        <li>
            <label>Вершина выхода {props.index}: вершины выхода: </label>
            <input type="text" value={val} onChange={ChangeValue}></input>
        </li>
    );
};

export default InputLine;
