const auto = {
    manufacturer: "Škoda",
    model: "Octavia",
    year: 2019,
    "average speed": 100
}

const displayInformation = () => console.log(auto);

displayInformation();

const timeToOvercome = (distance) => {
    let time = distance / auto["average speed"];
    console.log(time);
    if (time % 4 === 0) {
        return time + Math.floor((time - 1) / 4);
      }
    return time + Math.floor(time / 4);
}

timeToOvercome(835);