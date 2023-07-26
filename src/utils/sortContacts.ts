import { Contact } from '../../@types/types';

export const sortContacts = (arr: Contact[]): Contact[] => {
  return [...arr.sort((a, b) => a.name.localeCompare(b.name))];
};
