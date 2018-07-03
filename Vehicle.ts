class Vehicle
{
    private regNo:string;
    private type:string;
    private fuelType:string;
    private dop:Date;
    constructor(regNo:string,type:string,fuelType:string)
    {
        this.regNo=regNo;
        this.type=type;
        this.fuelType=fuelType;
    }

    set DOP(value:Date)
    {
        this.dop=value;
    }

    get DOP():Date
    {
        return this.dop;
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

var obj=new Vehicle("TN-32-265427","Two Wheeler",
    "Petrol")
obj.DOP=new Date(2016,1,25)
console.log(obj.RegNo)
console.log(obj.DOP);
