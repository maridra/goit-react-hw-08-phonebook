import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsData.contacts;

export const selectIsLoading = state => state.contactsData.isLoading;

export const selectError = state => state.contactsData.error;

export const selectFilterValue = state => state.filterValue.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    const normalizedFilterValue = filterValue.toLowerCase();
    const visibleContacts = contacts
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(normalizedFilterValue);
        })
      : [];

    return visibleContacts;
  }
);
