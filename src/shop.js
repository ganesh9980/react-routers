import React from 'react'
import { Link } from 'react-router-dom'
const Shop = () => {

    const [state, setstate] = React.useState([])
    React.useEffect(() => {
        Items()
    }, [])
    const Items = async()=>
    {
        const data= await fetch('https://fortnite-api.theapinetwork.com/upcoming/get')
        const items= await data.json()
        console.log(items.data)
        setstate(items.data)
    }
    return (
        <>
            {state.map(curElem=>(
                <h1 key={curElem.itemId}><Link to={`/Shop/${curElem.itemId}`}> {curElem.item.name}</Link></h1>
            ))}
        </>
    )
}

export default Shop
