/*enum DPTS_1_1_ENUM{
    Off,
    On,
}

export class DPTS_1_1{
    
    static readonly Enum = DPTS_1_1_ENUM;

    static readonly type = "Enumeration";

    static readonly sizeInBit =1;

    static readonly explicitName = "DPT_Switch";

    static readonly basicName = "switch";
    
    constructor(public address:string, public state:DPTS_1_1_ENUM){

    }
}*/

/**
 export class DPST_5_1{

    static readonly sizeInBit = 8;

    static readonly type = "integer";

    static readonly explicitName = "DPT_Scaling";

    static readonly basicName = "percentage";

    static readonly minValue = 0;

    static readonly maxValue = 100;

    static readonly coefficient = 0.3921566;

    static readonly unit = "%";

    constructor(public address:string, public state:number){

    }    
}
 */

export class DPST_5_10{

    static readonly sizeInBit = 8;

    static readonly type = "integer";

    static readonly explictName = "DPT_Value_1_Ucount";

    static readonly basicName = "counter pulses";

    static readonly minValue = 0;

    static readonly maxValue = 255;

    static readonly coefficient = 1;

    static readonly unit = "count";

    constructor(public address:string, public state:number){

    }    
}

export class DPST_9_1{

    static readonly sizeInBit = 16;

    static readonly type = "float";

    static readonly explictName = "DPT_Value_Temp";
    
    static readonly basicName = "temperature";

    static readonly minValue = -273;

    static readonly maxValue = 670760;

    static readonly coefficient = 1;

    static readonly unit = "°C";

    constructor(public address:string, public state:number){

    }    
}

export class DPST_9_7{

    static readonly sizeInBit = 16;

    static readonly type = "float";

    static readonly explictName = "DPT_Value_Humidity";

    static readonly basicName = "humidity";

    static readonly minValue = -273;

    static readonly maxValue = 670760;

    static readonly coefficient = 1;

    static readonly unit = "%";

    constructor(public address:string, public state:number){

    }    
}

export interface DPST{

    readonly type: string,

    readonly sizeInBit: number,

    readonly basicName: string,

    readonly explicitName: string,

    readonly enumeration: Array<string> | null,

    // readonly bitList: Array<BitData> | null;

    readonly minValue: any | null,

    readonly maxValue: any | null,

    readonly coefficient : number | null;

    readonly unit: string | null,

};

export interface BitData{
    cleared: string,
    set: string,
    name: string | null,
}


////Examples

const DPTS_1_1 : DPST = {
    type: "Enumeration",
    sizeInBit: 1,
    basicName: "switch",
    explicitName: "DPT_Switch",
    enumeration:
        [
            "Off",
            "On"
        ],
    minValue: 0,
    maxValue: 1,
    coefficient: null,
    unit: null,
};

const DPST_1_2: DPST = {
    type: "Enumeration",
    sizeInBit: 1,
    basicName: "boolean",
    explicitName: "DPT_Bool",
    enumeration: 
        [
            "False",
            "True",
        ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null
}

const DPST_1_3: DPST = {
    type: "Enumeration",
    sizeInBit: 1,
    basicName: "enable",
    explicitName: "DPT_Enable",
    enumeration: 
        [
            "Disable",
            "Enable"
        ],
    minValue: undefined,
    maxValue: undefined,
    coefficient: null,
    unit: null
}

const DPST_1_8: DPST = {
    type: "Enumeration",
    sizeInBit: 1,
    basicName: "DPT_UpDown",
    explicitName: "up/down",
    enumeration: 
        [
            "Up",
            "Down"
        ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null
}

const DPST_1_100: DPST = {
    type: "Enumeration",
    sizeInBit: 1,
    basicName: "cooling/heating",
    explicitName: "DPT_Heat_Cool",
    enumeration:
        [
            "Cooling",
            "Heating"
        ],
    minValue: undefined,
    maxValue: undefined,
    coefficient: null,
    unit: null
}

const DPST_20_102: DPST = {
    type: "Enumeration",
    sizeInBit: 8,
    basicName: "HVAC mode",
    explicitName: "DPT_HVACMode",
    enumeration:
        [
            "Auto",
            "Comfort",
            "Standby",
            "Economy",
            "Building Protection"
        ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
};

const DPST_5_1:DPST = {
    type: "uInt",
    sizeInBit: 8,
    basicName: "percentage",
    explicitName: "DPT_Scaling",
    enumeration: null,
    minValue: 0,
    maxValue: 100,
    coefficient: 0.3921566,
    unit: "%"
}