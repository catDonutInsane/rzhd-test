import { useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setButtonAccess} from "../../reducers/reducer"
type Props ={
    data:number,
    validate:string,
}
export const TableCell:React.FC<Props> = ({validate,data}) =>{
    const dispatch = useAppDispatch()
    let ref = useRef<HTMLTableCellElement>(null)
    const [val, setVal] = useState(true)

    
    let validatorEngine =(cellValue:string) =>{  
        let reg =/^[0-9]\d*$/.test(cellValue)
        reg?setVal(true):setVal(false)
    }
    
    let validatorForce = (cellValue:string)=>{
        let reg =/^[1-9]\d*\.\d+$/.test(cellValue)
        reg?setVal(true):setVal(false)
    }

    let validation = ()=>{
        if(ref.current){
            if(validate==="Engine"){
                return validatorEngine(ref.current.innerHTML)
            }
            else {
                return validatorForce(ref.current.innerHTML)
            }
        }
        
    }
     
    useEffect(()=>{
        validation()
        let u =document.querySelectorAll("td")
        let res =Array.from(u).map(i=>i)
        
        let buttonAccess = Array.from(res.map(i=>i.attributes))
                        .map(i=>i[1].value)
                        .some(i=>i==="color: red;")
                            
                            
        buttonAccess?
            dispatch(setButtonAccess(true)):
            dispatch(setButtonAccess(false))
    },[val])

    return(
        <td  
            ref={ref}
            contentEditable 
            suppressContentEditableWarning={true}
            style={val?{color:"black"}:{color:"red"}} 
            onInput={()=>validation()}
        >{data}
        </td>
    )
}