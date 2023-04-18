import {create} from 'zustand';

const useFinanceDeficiencyModalStore = create((set) => ({
  isOpen: false,
  openFinanceDeficiencyModal: () => {
    set({isOpen: true});
  },
  closeFinanceDeficiencyModal: () => {
    
    set({isOpen: false});
  },
}));
  
export default useFinanceDeficiencyModalStore;