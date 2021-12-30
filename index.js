const aboutElement = document.querySelector('div.about')
const creditsElement = document.querySelector('div.credits')
const contactElement = document.querySelector('div.contact')
const tabs = [
    {
        text: 'about',
        el: aboutElement,
        display: aboutElement.style.display
    },
    {
        text: 'credits',
        el: creditsElement,
        display: creditsElement.style.display
    },
    {
        text: 'contact',
        el: contactElement,
        display: contactElement.style.display
    }
]

const handle = (e) => {
    // consumes a tab click event
    // show this tab, hide the others.
    tabs.forEach(tab => {
        if (tab.text !== e.target.innerHTML) {
            tab.el.style.display = 'none'
        } else {
            tab.el.style.display = tab.display
        }
    })
}

handle({target:{innerHTML:'about'}}) // mock event to show about by default