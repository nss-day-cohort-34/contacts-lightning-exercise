const whereToDisplayContactsInDOM = document.querySelector("#contactList")

const createContact = (name, title, email) => ({ name, title, email })

const displayContact = contact => {
    const contactHTMLRepresentation = `
        <section class="contact">
            <h1 class="contact__name"> ${contact.name} </h1>
            <h2 class="contact__title"> ${contact.title} </h2>
            <div class="contact__email"> ${contact.email} </div>
        </section>
    `
    whereToDisplayContactsInDOM.innerHTML += contactHTMLRepresentation
}

const mark = createContact(
    "Mark Brownlee",
    "Head Leaf Guy",
    "mark@mark.com"
)

const cathie = createContact(
    "Cathie Visconti",
    "Best Mom Ever",
    "cathie@cathie.com"
)

const krista = createContact(
    "Krista Brownlee",
    "Vice President of Marketing",
    "krista@krista.com"
)

const michelle = createContact(
    "Michelle Brownlee",
    "Love of my life",
    "michelle@michelle.com"
)

const john = createContact(
    "John Visconti",
    "COO",
    "john@john.com"
)

displayContact(mark)
displayContact(krista)
displayContact(michelle)
displayContact(john)
displayContact(cathie)
