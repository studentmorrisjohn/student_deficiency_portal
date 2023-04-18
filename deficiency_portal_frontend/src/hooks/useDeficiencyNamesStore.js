import {create} from 'zustand';

const useDeficiencyNamesStore = create((set) => ({
  deficiencyNames: [],
  activeDeficiencyName: {"name": null, "category" :null},
  setdeficiencyNames: (_deficiencyNames) => set((state) => ({ deficiencyNames: _deficiencyNames })),
  setActiveDeficiencyName: (_deficiencyName) => set((state) => ({ activeDeficiencyName: _deficiencyName })),
}));
  
export default useDeficiencyNamesStore;