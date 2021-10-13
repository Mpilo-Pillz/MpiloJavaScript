const me = {
    name: "Mpillz",
    age: 22,
    address: {
        streetNumber: 1,
        streetName: "Some Street",
        province: "GP"
    },
    skills: {
        Company: "Fikasentani Technologies",
        Address: "Software Engineering",
        stack: {
            frontEnd: {
                nodejs: "React, Angular, Vue",
            },
            backEnd: {
                nodejs: "Express, Nest"
            }
        },
        programming: {
            HTML: "Proficient",
            CSS: "Proficient",
            JavaScript: "Proficient",
            TypeScript: "Proficient"
        }
    }
}
// foor key in object(customer)
// new dictionary = {}

const flattenObj = (obj) => {
    let result = {}

    for (const i in obj) {
        if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + '.' + j] = temp[j]
            }
        }
        else {
            result[i] = obj[i];
        }
    }
    return result
}

console.log(flattenObj(me));

    // const flattenObj = (ob) => {

    //     // The object which contains the
    //     // final result
    //     let result = {};

    //     // loop through the object "ob"
    //     for (const i in ob) {

    //         // We check the type of the i using
    //         // typeof() function and recursively
    //         // call the function again
    //         if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
    //             const temp = flattenObj(ob[i]);
    //             for (const j in temp) {

    //                 // Store temp in result
    //                 result[i + '.' + j] = temp[j];
    //             }
    //         }

    //         // Else store ob[i] in result directly
    //         else {
    //             result[i] = ob[i];
    //         }
    //     }
    //     return result;
    // };

    // console.log(flattenObj(ob));