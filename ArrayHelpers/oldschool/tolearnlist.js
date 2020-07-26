const toLearn = [
    {
        skill: 'HTML and CSS',
        status: 'COMPLETED',
        completed: true
    },
    {
        skill: 'MongoDB',
        status: 'IN PROGRESS',
        completed: false
    },
    {
        skill: 'JavaScript',
        status: 'IN PROGRESS',
        completed: false
    },
    {
        skill: 'TypeScript',
        status: 'TO DO',
        completed: false
    },

];

const sortList = function (list) {
    list.sort(function (a, b) {
        if (a.skill.toLowerCase() < b.skill.toLowerCase()) {
            console.log('a---,', a);
            return -1;
        } else if(b.skill.toLowerCase() < a.skill.toLowerCase()) {
            return 1;
        }
         else {
            return 0;
        }
    })
}

const sortToLearnList = function (list) {
    list.sort(function (a, b) {
        console.log('a-->', a);
        console.log('b-->', b);
        if (!a.completed && b.completed) {
            console.log('a---,', a);
            return -1;
        } else if(!b.completed && a.completed) {
            return 1;
        }
         else {
            return 0;
        }
    })
}

function searchList(list, seacrhCriteria) {
    return list.find(function(item) {
        // console.log(item.skill);
        return seacrhCriteria.toLowerCase().trim() === item.skill.toLowerCase().trim()
    })
}

function filterList(list, seacrhCriteria) {
    return list.filter(function(item) {
        // console.log(item.skill);
        const isSkillMatch = item.skill.toLowerCase().includes(seacrhCriteria.toLowerCase())
        const isStatusMatch = item.status.toLowerCase().includes(seacrhCriteria.toLowerCase())
        return isSkillMatch || isStatusMatch; 
        // return seacrhCriteria.toLowerCase().trim() === item.status.toLowerCase().trim()
    })
}

function deleteItem(list, seacrhCriteria) {
     const index = list.findIndex(function(item ) {
        return seacrhCriteria.toLowerCase().trim() === item.status.toLowerCase().trim();
    })
    // return toLearn[note]
    if (index > -1) {
        return toLearn.splice(index, 1)
    } else {
        return 'NOT FOUND!'
    }
}
// searchList(toLearn, 'in progress')

// console.log(searchList(toLearn, 'JavaScript'))
// console.log(searchList(toLearn, 'HTML and CSS'))
// console.log(searchList(toLearn, 'MongoDB'))
// console.log('-------------------------------');
// // console.log(deleteItem(toLearn, 'in progress'))
// // console.log(deleteItem(toLearn, 'COMPLeted'))
// console.log(deleteItem(toLearn, 'To do0'))
// console.log('------------FILTER--------------');
// console.log(filterList(toLearn, 'o'))
// console.log('-------------------------------');
// console.log(toLearn);
// sortList(toLearn)
sortToLearnList(toLearn)
console.log('--->>',toLearn);
