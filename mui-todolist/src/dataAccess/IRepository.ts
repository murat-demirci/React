export interface IRepository{
    getAllAsync() : Promise<object | string>
    addAsync(vals:AddValType) : Promise<boolean>
    deleteAsync(id:number): Promise<boolean>
}