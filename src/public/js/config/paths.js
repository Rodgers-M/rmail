const paths = {
  root: '/',
  inbox: '/inbox',
  important: '/important',
  sentMail: '/sent-mail',
  drafts: '/drafts',
  spam: '/spam',
  email: emailId => `/emails/${emailId}`,
};

export default paths;
