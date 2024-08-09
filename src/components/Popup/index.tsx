import { useEffect, useRef } from "react";

import { CloseCross, StyledDialog } from "./styled";

export function Popup({
  children,
  onClose,
}: {
  children: React.ReactElement;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  return (
    <StyledDialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      onClose={onClose}
      onTouchMove={() => {
        onClose();
        dialogRef.current?.close();
      }}
    >
      <CloseCross onClick={onClose}>⨯</CloseCross>
      {children}
    </StyledDialog>
  );
}
