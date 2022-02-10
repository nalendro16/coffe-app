import create from 'zustand'

export const useStore = create((set) => ({
  respond: [{ token_type: '', access_token: '' }],
  updateRespond: (token) =>
    set((state) =>
      state.respond.map(
        (res) => (
          (res.token_type = token.token_type),
          (res.access_token = token.access_token)
        )
      )
    ),
}))
