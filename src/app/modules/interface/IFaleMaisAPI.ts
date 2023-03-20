export interface ICalculo {
  valorComPlano: number,
  valorSemPlano: number
}

export interface IPlano{
  id: number,
  nome: string,
  minutosIncluidos: number
}

export interface IDDD{
  ddd: string
}

export interface IForm{
  dddOrigem: string,
  dddDestino: string,
  minutos: number,
  planoId: number
}
