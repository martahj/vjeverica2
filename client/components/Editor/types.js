// @flow

export type FlexValsSignature = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
};

export type ColState = {
  flexVals: FlexValsSignature,
  type: 'TEXT' | 'IMAGE' | 'VID' | 'MUSIC',
  content: any,
};

export type RowState = {
  cols: Array<ColState>,
};
