import {create} from 'zustand';

const useProfileDataStore = create((set) => ({
  profileData: {},
  setProfileData: (_profileData) => set({profileData: _profileData}),
}))
  
export default useProfileDataStore;