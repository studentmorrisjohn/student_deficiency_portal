import {create} from 'zustand';

const useSuccessModalStore = create((set) => ({
  isOpen: false,
  message: "",
  openSuccessModal: (_message) => {
    set({isOpen: true, message:_message});
  },
  closeSuccessModal: () => {
    set({isOpen: false, message:""});
  },
}));
  
export default useSuccessModalStore;