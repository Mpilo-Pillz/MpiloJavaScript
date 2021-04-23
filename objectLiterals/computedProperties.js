const role = "host";
const person = "Sfiso";
const person2 = "tshepho";
const role2 = "guest";

const team = {};
team[role] = person;
team[role2] = person2;

const userRoles = {
  [user]: "Admin",
};

const newTeam = {
  [role]: person,
  [role2]: person2,
};
userRoles;

function addProp(obj, k, y) {
  const copy = { ...obj };
  copy[k] = v;
  return copy;
}

const addPropEs6 = (obj, k, v) => {
  return {
    ...obj,
    [k]: v,
  };
};

const res = addProp(team, "happy", ":)");
const es6Res = addPropEs6(team, "laugh", ":D");
