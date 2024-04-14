export class PositionEmployeePostModel {
    
        positionId: number
        entryDateIntoOffice:Date
        ismanagerial:boolean
        employeeId!:number

        
    constructor(
        positionId: number,
        entryDateIntoOffice:Date,
        ismanagerial:boolean
    ) {
        this.positionId = positionId
        this.entryDateIntoOffice = entryDateIntoOffice,
        this.ismanagerial = ismanagerial
}
}
