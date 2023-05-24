import { IRepository } from "./IRepository";
import axios from "axios";

export class Repository implements IRepository {
    async deleteAsync(id: number): Promise<boolean> {
        try {
           await axios.delete(`http://localhost:3000/todolist/${id}`);
           return true
        } catch (error) {
            return false
        }
    }
    async addAsync(vals : AddValType): Promise<boolean> {
        try {
            await axios.post("http://localhost:3000/todolist/",{
                header:vals.header,
                content:vals.content,
            });
            return true;
        } catch (error) {
            return false;
        }
    }
    async getAllAsync(): (Promise<object | string>) {
        try {
            const response = await axios.get("http://localhost:3000/todolist");
            return response.data;
        } catch (error) {
            return "Sorry :( \nSomething goes wrong !!!"
        }
    }

}