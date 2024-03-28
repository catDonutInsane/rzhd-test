import { useAppSelector } from "../../hooks/hooks"
import { TableRow } from "../tableRow/TableRow"
import { SendButton } from "../button/SendButton"
import { Link } from "react-router-dom"
import style from "./TrainCard.module.css"
export const TrainCard =() =>{
const {trainCard, name} = useAppSelector(state=>state.reducer)
    return(
        <div className={style.wrapper}>
            <div>
            <table cellPadding={4} border={1} >
                <caption>Характеристики</caption>
                <caption>{name}</caption>
                <tbody >
                <tr>
                    <th>Ток двигателя</th>
                    <th>Сила тяги</th>
                    <th>Скорость</th>
                </tr>
                {trainCard.map(i=><TableRow key={i.force} {...i}/>)}
                </tbody>
            </table>
            </div>
            <div>
                <SendButton/>
                <Link to={"/"}><button>назад</button></Link>
            </div>
            
        </div>
    )
}