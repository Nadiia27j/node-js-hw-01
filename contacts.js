const fs = require('fs').promises;
const path = require('node:path');

const contactsPath = path.resolve(__dirname, 'db/contacts.json');

async function listContacts() {
    try {
        const data = JSON.parse( await fs.readFile(contactsPath, 'utf8'));
        return data;
    } catch (error) {
        console.log(error);
    }
}

function getContactById(contactId) {}

function removeContact(contactId) {}

function addContact(name, email, phone) {}


module.exports = {
    listContacts,
};