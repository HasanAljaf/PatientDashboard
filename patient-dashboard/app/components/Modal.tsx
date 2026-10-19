// Modal Props
type ModalProps = {
  dialogRef: React.Ref<HTMLDialogElement>;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ dialogRef, onClose, children }: ModalProps) {
  return (
    <dialog
      className="m-auto w-11/12 max-w-md rounded-2xl bg-white p-6 shadow-md backdrop:bg-black/40"
      ref={dialogRef}
      onClose={onClose}
    >
      {children}
    </dialog>
  );
}
