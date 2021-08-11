// can use spread to copy an array
const cephalopods = ["dumbo octopus", "humboldt suid", "flamboyant cuttlefish"];

const gastropods = ["giant african snail", "banana slug", "vriable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollasca = ["garden slug", ...cephalopods, ...gastropods];

const invertabrates = [...mollasca, ...cnidaria]; // instrad on usung arrat.concat()

const letters = [..."mnopqrstuvwxyz"];
