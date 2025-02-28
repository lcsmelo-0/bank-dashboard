import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountsState {
  accounts: string[];
}

const initialState: AccountsState = { accounts: [] };

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    saveAccount: (state, action: PayloadAction<string>) => {
      state.accounts.push(action.payload);
    },
  },
});

export const { saveAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
