import timestampSort from './timestampSort';

const Email = timestamp => {
  return { timestamp };
};

describe('timestampSort', () => {
  it('should be defined and be a function', () => {
    expect(timestampSort).toBeDefined();
    expect(typeof timestampSort).toBe('function');
  });

  it('sorts emails in ascending order according to time', () => {
    const email1 = Email(1000);
    const email2 = Email(1001);
    const email3 = Email(1002);
    const emails = [email1, email2, email3];
    const expectedEmailList = [email3, email2, email1];
    const sortedEmails = emails.sort(timestampSort);
    expect(sortedEmails).toEqual(expectedEmailList);
  });
});
