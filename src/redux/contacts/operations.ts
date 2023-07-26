import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { instance } from 'services';
import { Contact } from '../../../@types/types';

export const fetchContacts = createAsyncThunk<
  Contact[],
  undefined,
  { rejectValue: string }
>('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await instance.get('/contacts');
    return data.contacts;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // toast.error(error?.response?.data?.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Contact,
  { rejectValue: string }
>('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await instance.post('/contacts', contact);
    toast.success(`Contact ${contact.name} added to the contacts`);
    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk<
  Contact,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const { data } = await instance.delete(`/contacts/${contactId}`);
    return data.contact;
  } catch (e: unknown) {
    const error = e as AxiosError;
    // toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
