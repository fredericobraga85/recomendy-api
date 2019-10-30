export interface Service {
  title: string
  action: string
  resolver: (arg0: any, arg1: any) => any
}
