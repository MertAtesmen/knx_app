import { dataTypes } from "./app.component";
import { isDpst } from "./new_dpts";

export function getText(dpst:string): string  |null{
   
    if(!isDpst(dpst)){

        console.log("Not Dpst");
        return null;
    }
    
    const regexp = /\d+/i;

    const firstreg = regexp.exec(dpst);

    const index = parseInt(firstreg![0]) -1;

    const data = dataTypes[index]["DatapointSubtypes"]["DatapointSubtype"];

    if(data.length === undefined){
        
        return data["Text"];
    }
    else{
        try{
            return data.find((value:any,i:any,arr:any)=>(value["Id"] as string).startsWith(dpst.toUpperCase()))["Text"];
        }catch(e){
            return null;
        }
      }


    return null;
}