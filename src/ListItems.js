import React from 'react'
import style from './List.module.css';

const ListItems=(props)=> {
    const itemList= props.items.map(item=> 
        <div className={style.item} key= {item.key}>
            <p className={style.p}>
                <input 
                    onKeyPress={props.onPress}
                    value={item.text} 
                    onChange={(e)=> props.changeInput(e.target.value, item.key)} 
                    className={style.change}/>
            </p>
            <button onClick={()=> props.deleteHandler(item.key)} className={style.button}>
                Done
            </button>
        </div>
    )
    return (
        <div>
            {itemList}
        </div>
    )
}

export default ListItems