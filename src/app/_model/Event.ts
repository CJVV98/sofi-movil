import { Resource } from "./Resource";

export class Event {   
    id!: number;
    name!: string;
    start_date!: string;
    end_date!: string;
    state!: string;
    information!: string;
    place!: string;
    visibility!: string;
    resources: Resource[]=[];
    notifications!: Notification[];
    user_id!:number;

}