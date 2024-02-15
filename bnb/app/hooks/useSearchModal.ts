import { create } from "zustand";

// Zustand is a state management solution for React.
// Zustand is German for "state"

interface searchModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Creating a store for the register modal
const useSearchModal = create<searchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSearchModal;
