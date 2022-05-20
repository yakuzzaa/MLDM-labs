/**
 *
 * проходимся по всем элементам первого отношения и для каждого
 * проверяем, находится ли он больше чем с другим элементом другого отношения.
 * Если это так ф-ция возвращает false
 */

function isRelation(set1, relation)
{
    for(let i = 0; i < set1.length; i++)
    {
        let meetingCount = 0;
        for(let j = 0; j < relation.length; j++)
        {
            if(set1[i] === relation[j][0])
            {
                meetingCount++;
                if(meetingCount > 1)
                    return false;
            }
        }
    }
    return true;
}


function calculate()
{
    /*Инициализация переменных */
    let set1 = document.getElementById('set1').value.split(" ");
    let set2 = document.getElementById('set2').value.split(/\n| |,|/);
    let relation = document.getElementById('relation').value.split(', ');
    let output = document.getElementById('output');

    for(let i = 0; i < relation.length; i++)
        relation[i] = relation[i].split(' ');
    /*проверка корректности введенных данных */
    let error = 0;

    if(set1.length === 0 || set2.length === 0 || relation.length === 0)
    {
        error = 4;
    }
    else
    {
        for(let i = 0; i < relation.length; i++)
        {
            let set1Meeted = false;
            for(let j = 0; j < set1.length; j++)
                if(relation[i][0] === set1[j])
                {
                    set1Meeted = true;
                    break;
                }

            let set2Meeted = false;
            for(let j = 0; j < set2.length; j++)
                if(relation[i][1] === set2[j])
                {
                    set2Meeted = true;
                    break;
                }

            if(!set1Meeted && !set2Meeted )
                error = 3;
            else if(!set2Meeted)
                error = 2;
            else if(!set1Meeted)
                error = 1;
        }
    }

    if(error === 4)
        output.innerText = "вы должны заполнить все поля"
    else if(error === 3)
        output.innerText = "екоторые элементы из отношения не присутствуют в множестве 1 и множестве 2"
    else if(error === 1)
        output.innerText = "некоторые элементы из отношения не присутствуют в множестве 1"
    else if(error === 2)
        output.innerText = "некоторые элементы из отношения не присутствуют в множестве 2"

    else if(error === 0)
        if(isRelation(set1, relation))
            output.innerText = "Это функциональное отношение";
        else
            output.innerText = "Это не функциональное отношение";
}