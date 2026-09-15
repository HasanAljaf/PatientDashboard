// Modal Props
type ModalProps = {
  dialogRef: React.Ref<HTMLDialogElement>;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ dialogRef, onClose, children }: ModalProps) {
  return (
    <dialog ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>
  );
}
