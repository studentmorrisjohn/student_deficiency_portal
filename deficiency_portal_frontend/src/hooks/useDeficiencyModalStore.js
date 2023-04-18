import {create} from 'zustand';

const useDeficiencyModalStore = create((set) => ({
  deficiencyModal: false,
  activeDeficiencyId: 0,
  adminMode: false,
  openDeficiencyModal: () => set((state) => ({ deficiencyModal: true })),
  openDeficiencyModalAdmin: () => set((state) => ({ deficiencyModal: true, adminMode:true })),
  closeDeficiencyModal: () => set((state) => ({ deficiencyModal: false, adminMode:false  })),
  setactiveDeficiencyId: (id) => set((state) => ({ activeDeficiencyId: id }))
}));
  
export default useDeficiencyModalStore;