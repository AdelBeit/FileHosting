let stories = {}; // jiraID:{title: title, href: url, epic: {href:href,title:title,jiraID:jiraID}, type: type}
// get all lists
let lists = document.getElementById("main").querySelector("ul");
// get stories in each list
for (list in lists) {
  listItems = list.querySelector("li");
  for (li in listItems) {
    let a = li.querySelector("a");
    let jiraID = a.innerText;
    stories[jiraID] = { href: a.href };
  }
}

// create a script tag
let storyScript = document.createElement("script");
storyScript.setAttribute("type", "text/javascript");
storyScript.setAttribute("src", "getstory.js");

// store stories and href in local storage
window.localStorage("stories") = stories;
// go through local storage and open each link
for (story in stories) {
  let newWindow = window.open(story.href);
  window.localStorage["openedWindow"] = newWindow;
  newWindow.document.getElementsByTagName("head")[0].appendChild(storyScript);
  window.localStorage["closeWindow"] = () => newWindow.close();
}
