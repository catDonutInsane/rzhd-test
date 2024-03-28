import { useEffect, useState } from "react"
import { useAppSelector } from "../../hooks/hooks"
export const SendButton=()=>{

    const [disable, setDisabled] = useState(false)
    const {setButtonAccess, trainCard} = useAppSelector(state=>state.reducer)
 
    useEffect(()=>{
        setButtonAccess?
            setDisabled(true):
            setDisabled(false)
 },[setButtonAccess])

 let getSpeedList = () =>{
    let res = trainCard.map(i=> i.speed).sort((a,b)=>a-b)
    console.log(res)
 }
    return(
        <button 
            disabled={disable}
            onClick={getSpeedList}
        >Отправить
        </button>
    )
}