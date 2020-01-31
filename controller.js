const Instructors = require('db')

module.exports = {
index(req, res){
        const {filter} = req.query//vai pegar o carry string ?nome-input='PESQUISA-AQUI'

        if(filter) {//CASO TENHA ALGO PESQUISA
            Instructors.findBy(filter , (instructors)=>{
                return res.render('instructors/index' , { instructors , filter })
            })
        }else{//caso não tenha pegue todos os instrutores normalmente
            Instructors.all((instructors) =>{
                return res.render('instructors/index' , { instructors })
            })
        }

    },
}
