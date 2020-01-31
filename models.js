module.exports ={
 all(callback){
        db.query(`
        SELECT instructors.*, count(members) AS total_instructors
        FROM instructors
        LEFT JOIN members ON (instructors.id = members.instructors_id)
        GROUP BY instructors.id
        ` , (err ,results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
    findBy(filter , callback){
        db.query(`
        SELECT instructors.*, count(members) AS total_instructors
        FROM instructors
        LEFT JOIN members ON (instructors.id = members.instructors_id)
        WHERE instructors.name ILIKE '%${filter}%'
        OR instructors.services ILIKE '%${filter}%'
        GROUP BY instructors.id
        ORDER BY instructors.name DESC
        ` , (err ,results)=>{
            if(err) throw `Database is ${err}`

            callback(results.rows)
        })
    },
}
//DEPOIS DE TER FEITO A JUNÇÃO DE DUAS TABELAS(
//LEFT JOIN members ON (instructors.id = members.instructors_id)
//)

//WHERE instructors.name ILIKE '%${filter}%'

//quando o instructors.name (que vai ser filtrado)
//O ILIKE = tudo que vier maiúsculo ou  minusculo ele vai pesquisar dentro da string
//'${filter}' é possivel enviar apenas o filter, mas, ele só vai encontrar se exatamente igual
//por isso usamos as (%) no começo e no fim , assim ele caso tenha algumas letras iguais ele já consegue encontrar

//formas de filtrar mais de alguma coisa
//OR = pode ser esse ou outra coisa
//and = tem de ser esse e outra coisa, ou seja , tem de ter os dois(ou mais)
