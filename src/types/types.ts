export type trainType ={
    name:string,
    description:string,
    characteristics: characteristicsType[]
}

export type characteristicsType ={
    speed:number,
    force:number,
    engineAmperage:number
}

export type IS ={
    trainList:trainType[],
    trainCard:characteristicsType[],
    name:string,
    setButtonAccess:boolean
}

