import {create} from 'zustand';

const useAuthenticatedStore = create((set) => ({
  isAuthenticated: false,
  authenticate: () => set((state) => ({ isAuthenticated: true })),
  unAuthenticate: () => set((state) => ({ isAuthenticated: false })),
}))
  
export default useAuthenticatedStore;