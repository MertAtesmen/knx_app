import { dataTypes } from "./app.component";

// Burada data type'ları anlataca classlar yaratmaya çalıştım fakat beceremedim
// Eğer başarsaydım teoride her tülü data type'ı kapsayacak bir component yaratmak mümkün olacaktı.


enum DPSTDataTypes{
    BitData,
    UnsignedValue,
    FloatValue,
    Reserved,
    Mixed,
}

export type AllTypes = BitDataType | UnsignedValueType | FloatValueType | ReservedType | Mixed;

export interface DPST{
    readonly sizeInBit: number,
    readonly basicName: string,
    readonly explicitName: string,
    readonly typeInfo: AllTypes,
};


//Cleared and set refers to the names of the state when the bit is cleared or set:
//For example for DPST_1_1 cleared name is Off and set name is On

export interface BitData{
    readonly cleared: string,   
    readonly set: string,
}

export interface BitDataType{
    readonly bitArray: Array<BitData>, 
    readonly width: number ,
}

/*
if :
    minInclusive or maxInclusive is null than probably both of them null. Them bein null means the range is 0-255,
    coefficient is the scalar the value is multiplied in the device 
*/

export interface UnsignedValueType{
    readonly minInclusive: number| null,
    readonly maxInclusive: number| null,
    readonly coeffecient: number| null,
    readonly unit : string,
    readonly width: number ,
}

export interface FloatValueType{
    readonly minValue: number,
    readonly maxValue: number,
    readonly unit:string,
    readonly width: number ,
}

//This is a placeholder type and it is reserved for other types referencing this DPTS.

export interface ReservedType {
    readonly width: number ,
}

export interface Mixed{
    readonly typeList :Array<AllTypes> ;
}



export function isDpst(dpstName : string) : Boolean{

    const dpstNameFormat = /^dpst-\d+-\d+$/i;
    
    return dpstNameFormat.test(dpstName);
}


export function getDpst(dpstName : string) : DPST | null{
    
    if(!isDpst(dpstName)){
        return null;
    }

    return null;    
}