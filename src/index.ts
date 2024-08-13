export const disposableEmailBlocklist = (): string[] => {
  return require('./dict/disposable_email_blocklist.json');
};

export const isDisposableEmailDomain = (domain: string): boolean => {
  const blocklist = disposableEmailBlocklist();

  return blocklist.includes(domain);
};

export const isDisposableEmail = (email: string): boolean => {
  const domain = email.split('@').reverse()[0];

  return isDisposableEmailDomain(domain);
};
