import { FC} from "react";
import { TableCell } from "../tableCell/TableCell";
import type { characteristicsType } from "../../types/types";

export const TableRow:FC<characteristicsType> = (data) =>{
  
    return(
        <tr>
            <TableCell validate={"Engine"}  data={data.engineAmperage}/>
            <TableCell validate={"Force"}  data={data.force}/>
            <TableCell validate={"Engine"}  data={data.speed}/>
        </tr>
    )
}