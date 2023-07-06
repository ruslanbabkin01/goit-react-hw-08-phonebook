import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { instance } from 'services';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/contacts');
      return data.contacts;
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post('/contacts', contact);
      toast.success(`Contact ${contact.name} added to the contacts`);
      return data;
    } catch (e) {
      console.log(e.response.data.message);
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data.contact;
    } catch (e) {
      toast.error(e.response.data.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
