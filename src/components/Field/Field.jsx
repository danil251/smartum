import React, {useEffect, useState} from "react";
import s from './Field.module.css'


function Field(props) {
    let [result, setResult] = useState(false)
    useEffect(() => {
        setResult(false)
    }, [props.items])
    let click = () => {
        if (props.fnsh === 1) {
            setResult(true)
        }
    }


        return (
        <div className={s.wrap} onClick={click} id={props.id}>
            {props.res === 2 ? <img className={s.start} src="https://image.flaticon.com/icons/png/512/1768/1768116.png"
                                    alt=""/> : null}
            {result? <div>You win</div>: ''}
        </div>
    )
}

export default Field