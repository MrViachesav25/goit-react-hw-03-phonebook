import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Section from './Section';
import FilterInput from './FilterInput/FilterInput';
import ContactsList from './ContactsList/ContactsList';
import { setLocalStorage, getLocalStorage } from './Services/localStorage';

export default class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is duplicate contact`)
      : this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };

  deleteContact = userId => {

    console.log('userId', userId);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };

  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidMount() {
    const contacts = getLocalStorage();
    if (contacts) this.setState({contacts, hasError: false, error: null })

  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length) {
      setLocalStorage(this.state.contacts);
      this.setState({hasError: false, error: null});
    }
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <FilterInput value={this.state.filter} onChangeFilter={this.handleChangeFilter} />
          <ContactsList contacts={this.getFilterContacts()} delContact={this.deleteContact} />
        </Section>
      </>)
  }
};