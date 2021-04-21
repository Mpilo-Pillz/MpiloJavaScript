const totalEngineer = {
    frontEnd: 'HTML, CSS, JavaScript/TypeScript, Front End FameWork',
    backEnd: 'REST, GRAPHQL',
    database: 'MongoDB, PostgreSQL',
    mobile: 'Dart, Flutter, IOS, Android',
    testing: 'API REST automated, End-To-End , Unit, Integration',
    devops: 'Continuous Integration, Hosting'
}

const { frontEnd, backEnd, database, mobile, testing: qualityAssurance, devops } = totalEngineer;

console.log(`In a totoal engineer is proficient in ${frontEnd}, ${backEnd}, ${database}, ${mobile}, ${qualityAssurance} and ${devops}`);

const { frontEnd, backEnd, database, ...niche } = totalEngineer;