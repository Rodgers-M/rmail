const formatTimestamp = timeStamp => {
  const isoStringDate = new Date(timeStamp).toISOString();
  const splitDate = isoStringDate.split('T');
  const date = splitDate[0];
  const time = splitDate[1];
  return `${date} ${time}`;
};

const inboxEmail = incomingEmail => {
  const id = incomingEmail.id || '';
  const subject = incomingEmail.subject || '';
  const body = incomingEmail.body || '';
  const viewedAt = incomingEmail.viewedAt || '';
  const isImportant = incomingEmail.isImportant || '';
  let timestamp = incomingEmail.timeStamp;

  try {
    timestamp = formatTimestamp(timestamp);
  } catch (error) {
    console.debug(error.message);
    timestamp = '';
  }

  return {
    id,
    subject,
    body,
    viewedAt,
    isImportant,
    timestamp,
  };
};

export default inboxEmail;
