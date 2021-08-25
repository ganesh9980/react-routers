import React from 'react'

const Itemdetail = ({match}) => {
    
    const [state, setstate] = React.useState([])
    React.useEffect(() => {
        console.log(match)
        fetchItems()
    }, [])
    const fetchItems= async()=>
    {
        const data= await fetch('https://fortnite-public-api.theapinetwork.com/item/get?id=${match.params.id}')
        const items= await data.json()
        console.log(items)
        setstate(items)
    }
    return (
        <div>
            <h1>Specific Data</h1>
        </div>
    )
}

export default Itemdetail
