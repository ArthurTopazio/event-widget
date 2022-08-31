import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUsers";


export default class UserService {
  static async getUser(): Promise<AxiosResponse<IUser[]>> {
    return await axios.get('./users.json');
  }
};