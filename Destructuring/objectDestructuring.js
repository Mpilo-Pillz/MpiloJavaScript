const totalEngineer = {
    frontEnd: 'HTML, CSS, JavaScript/TypeScript, Front End FameWork',
    backEnd: 'REST, GRAPHQL',
    database: 'MongoDB, PostgreSQL',
    mobile: 'Dart, Flutter, IOS, Android',
    testing: 'API REST automated, End-To-End , Unit, Integration',
    devops: 'Continuous Integration, Hosting',

}

const { frontEnd, backEnd, database, mobile, testing: qualityAssurance, devops } = totalEngineer;

console.log(`In a totoal engineer is proficient in ${frontEnd}, ${backEnd}, ${database}, ${mobile}, ${qualityAssurance} and ${devops}`);

const { frontEnd, backEnd, database, ...niche } = totalEngineer;

const otherPopular = [{
    framework: 'react native',
    programmingLanguage: 'JavaScript'
},
{
    framework: 'android',
    programmingLanguage: 'Kotlin'
},
{
    framework: 'ionic',
    programmingLanguage: 'TypeScript'
}

]

const [{ inDemand: mostPopular }, { framework }] = otherPopular;

const [, native] = otherPopular;
const { programmingLanguage } = native

function print(engineer) {
    const { frontEnd, backEnd, database } = engineer;
    console.log(`mastering ${frontEnd}, ${backEnd}, and ${database} makes you a full stack developer`);
}

function printDestruc({ frontEnd, backEnd, database }) {
    console.log(`mastering ${frontEnd}, ${backEnd}, and ${database} makes you a full stack developer`);
}


