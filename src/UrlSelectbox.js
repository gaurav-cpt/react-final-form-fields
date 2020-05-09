import React from 'react';

export const UrlSelectbox = (props) => {
    return (
            <div>
                {props.options && props.options.length > 0  &&
                    <select defaultValue={props.value} value={props.value} name={props.name} onChange={props.onChange} className={props.className} >
                        <option value="">--- Select ---</option>
                    {props.options.map((x) => {
                        return (
                            <option key={x.value} value={x.value}>{x.display}</option>
                        )
                    })}
                    </select>
                }
            </div>
        )
}
