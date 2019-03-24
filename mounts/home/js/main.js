const intro =
  "I am an aspiring full stack developer." +
  " I currently work as a junior-level Angular developer\n" +
  " for the U.S. Geological Survey in Golden, CO.\n\n" +
  "I am in my senior year finishing a Bachelors degree" +
  " in web development.\n" +
  "When I am not working, coding, or working on school work,\n" +
  " I am skydiving, camping, flying paragliders, and" +
  " enjoying the outdoors.";

let i = 0;

function type() {
  if (i < intro.length) {
    document.getElementById("terminal-prompt").innerHTML += intro.charAt(i);
    i++;
    setTimeout(type, 10);
  }
}
