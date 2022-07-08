let alunos = [
    {
        nome: 'Julia',
        media: 9
    },
    {
        nome: 'Ricardo',
        media: 7
    },
    {
        nome: 'Hexah',
        media: 5
    },
    {
        nome: 'Marexu',
        media: 6
    }
]

let approvedStudents = []

function approved(arr, num){
    for(i = 0; i < arr.length; i++){
        // let {media, nome} = arr[i]
        let aluno = arr[i]
        let media = aluno.media
        let nome = aluno.nome
        
        if(media >= num){
            approvedStudents.push(nome)
        }
    }
    console.log(approvedStudents)
}

approved(alunos, 7)