export class Vehicle
{
    private regNo:string;
    private type:string;
    private fuelType:string;
    constructor(regNo:string,type:string,fuelType:string)
    {
        this.regNo=regNo;
        this.type=type;
        this.fuelType=fuelType;
    }
   
     get RegNo():string
     {
         return this.regNo;
     }
     get Type():string{
         return this.type;
     }

     get Fueltype():string
     {
         return this.Type;
     }
}