interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquatico',
    domestico: boolean
}

// const animal: IAnimal = {
//     nome: 'Beta',
//     tipo: 'aquatico'
// }

interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type TDomestico = IFelino | ICanino

const animal: TDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre' 
}