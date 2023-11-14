import { create } from "zustand";

// Zustand is a state management solution for React.
// Zustand is German for "state"

interface RegisterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Creating a store for the register modal
const useRegisterModal = create<RegisterModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
