import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative z-10 bg-white dark:bg-gray-900 border border-yellow-400 dark:border-yellow-700 w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4 border-b border-yellow-300 dark:border-yellow-800 pb-3">
          <h2 className="text-yellow-600 dark:text-yellow-400 font-bold text-lg tracking-widest">
            {title}
          </h2>
          <Button
            variant="secondary"
            onClick={onClose}
            className="px-2 py-1 text-sm"
          >
            ✕
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
};
