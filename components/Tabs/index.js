// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const data = axios.get("https://lambda-times-backend.herokuapp.com/topics");

const createTab = (input) => {
    const tab = document.createElement("div");
    
    // set class names
    tab.classList.add("tab");

    // add content
    tab.textContent = input;

    return tab;
}

data.then(response => {
    console.log(data);
    console.log("res", response);

    response.data.topics.forEach(item => {
        const newTopic = createTab(item);
        topics.appendChild(newTopic);        
    })
})

data.catch(error => {
    console.log("Error: ", error);
})

const topics = document.querySelector(".topics");