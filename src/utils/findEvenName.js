export const findEvenName = (data, name) => {
  if (data.length === 0) return;

  return data.find(contact => {
    const nameFound = contact.name.toLowerCase().includes(name.toLowerCase());
    if (!!nameFound) {
      alert(`${name} is already in contacts`);
    }
    return nameFound;
  });
};
