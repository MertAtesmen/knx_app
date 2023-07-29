interface DPST{

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


const DPST_1_1: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Switch",
    explicitName: "switch",
    enumeration:
      [
        "Off",
        "On"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_2: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Bool",
    explicitName: "boolean",
    enumeration:
      [
        "False",
        "True"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_3: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Enable",
    explicitName: "enable",
    enumeration:
      [
        "Disable",
        "Enable"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_4: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Ramp",
    explicitName: "ramp",
    enumeration:
      [
        "No ramp",
        "Ramp"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_5: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Alarm",
    explicitName: "alarm",
    enumeration:
      [
        "No alarm",
        "Alarm"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_6: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_BinaryValue",
    explicitName: "binary value",
    enumeration:
      [
        "Low",
        "High"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_7: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Step",
    explicitName: "step",
    enumeration:
      [
        "Decrease",
        "Increase"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_8: DPST =  {
    type: 'Enumeration',
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
    unit: null,
  }
  
  const DPST_1_9: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_OpenClose",
    explicitName: "open/close",
    enumeration:
      [
        "Open",
        "Close"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_10: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Start",
    explicitName: "start/stop",
    enumeration:
      [
        "Stop",
        "Start"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_11: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_State",
    explicitName: "state",
    enumeration:
      [
        "Inactive",
        "Active"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_12: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Invert",
    explicitName: "invert",
    enumeration:
      [
        "Not inverted",
        "Inverted"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_13: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_DimSendStyle",
    explicitName: "dim send style",
    enumeration:
      [
        "Start/stop",
        "Cyclically"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_14: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_InputSource",
    explicitName: "input source",
    enumeration:
      [
        "Fixed",
        "Calculated"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_15: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Reset",
    explicitName: "reset",
    enumeration:
      [
        "no action (dummy)",
        "reset command (trigger)"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_16: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Ack",
    explicitName: "acknowledge",
    enumeration:
      [
        "no action (dummy)",
        "acknowledge command (trigger), e.g. for alarming"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_17: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Trigger",
    explicitName: "trigger",
    enumeration:
      [
        "trigger",
        "trigger"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_18: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Occupancy",
    explicitName: "occupancy",
    enumeration:
      [
        "not occupied",
        "occupied"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_19: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Window_Door",
    explicitName: "window/door",
    enumeration:
      [
        "closed",
        "open"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_21: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_LogicalFunction",
    explicitName: "logical function",
    enumeration:
      [
        "logical function OR",
        "logical function AND"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_22: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Scene_AB",
    explicitName: "scene",
    enumeration:
      [
        "scene A",
        "scene B"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_23: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_ShutterBlinds_Mode",
    explicitName: "schutter/blinds mode",
    enumeration:
      [
        "only move Up/Down mode (shutter)",
        "move Up/Down + StepStop mode (blind)"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  const DPST_1_100: DPST =  {
    type: 'Enumeration',
    sizeInBit: 1,
    basicName: "DPT_Heat_Cool",
    explicitName: "cooling/heating",
    enumeration:
      [
        "cooling",
        "heating"
      ],
    minValue: null,
    maxValue: null,
    coefficient: null,
    unit: null,
  }
  
  