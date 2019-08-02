import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import timestampSort from './timestampSort';
import inboxEmail from './inboxEmail';
import InboxRow from './InboxRow';

class Inbox extends Component {
  constructor() {
    super();
    this.state = { emails: [] };
  }

  async componentWillMount() {
    const response = await fetch('/emails');
    const json = await response.json();
    const sortedEmails = json.sort(timestampSort);
    const emails = sortedEmails.map(incomingEmail => inboxEmail(incomingEmail));
    this.setState({ emails });
  }
  render() {
    const { emails } = this.state;
    return (
      <Table>
        <TableBody>
          {emails.map(email => (
            <InboxRow key={email.id} email={email} />
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default Inbox;
