type FunctionType = (...args: any[]) => any;
// tslint:disable-next-line:interface-over-type-literal
type ActionCreatorsMap = { [actionCreator: string]: FunctionType; };

export type ActionsUnion<A extends ActionCreatorsMap> = ReturnType<A[keyof A]>;
