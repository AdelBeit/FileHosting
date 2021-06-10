// grab relevant info
function getStory() {
  // get info
  let jiraID = window.location.pathname.replace("/browse/", "");
  // title
  let title = document.querySelector("#summary-val").innerText;
  // epic
  let epicDetails = document
    .querySelector('strong[title="Epic Link"]')
    .parentElement.querySelector("a");
  let epicJiraID = epicDetails.href.replace("https://jira.cox.com/browse/", "");
  window.localStorage["stories"][jiraID].epic = {
    title: epicDetails.innerText,
    href: epicDetails.href,
    jiraID: epicJiraID,
  };
  // type
  let type = document.querySelector("#type-val").innerText;
  // save all
  window.localStorage["stories"][jiraID] = {
    title: title,
    type: type,
    epic: epicDetails,
  };
  // close
  window.localStorage["closeWindow"]();
}
