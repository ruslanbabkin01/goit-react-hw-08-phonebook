import { sortContacts } from 'utils/sortContacts';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return sortContacts(visibleContacts);
  }
);
