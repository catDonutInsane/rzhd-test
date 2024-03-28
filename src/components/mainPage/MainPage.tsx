import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { getTrainList } from "../../reducers/reducer"
import axios from "axios"
import { getTrainInfo, setName } from "../../reducers/reducer"
import { Link } from "react-router-dom"
import { trainType } from "../../types/types"
import style from "./MainPage.module.css"

export const MainPage =()=>{
    const dispatch = useAppDispatch()
    const data= useAppSelector(state=>state.reducer.trainList)
    useEffect(()=>{
        axios.get("https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json")
        .then(res=>dispatch(getTrainList(res.data)))
    },[])

    let setTrainInfo = (name:string)=>{
        let card = data.filter((i:trainType)=>i.name===name)[0].characteristics
        dispatch(getTrainInfo(card))
        dispatch(setName(name))
    }
    return(
        <div className={style.wrapper}>
            <table>
            <caption>Поезда</caption>
                <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                    </tr>
                    {data.map(i=><tr key={i.name}><td><Link to={"/"+i.name} onClick={()=>setTrainInfo(i.name)}>{i.name}</Link></td><td>{i.description}</td></tr>)}
                </tbody>
            </table>

        </div>
    )
}