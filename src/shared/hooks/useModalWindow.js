import { useCallback, useEffect, useState } from "react";

const useModalWindow = (windowRef) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen((prev) => !prev);
  };

  const handleWindow = (isOpen) => {
    setIsOpen(isOpen);
  };

  const handleOutsideClick = useCallback(
    (event) => {
      if (windowRef?.current && !windowRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    },
    [windowRef]
  );

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOutsideClick, isOpen]);

  return { isOpen, toggleWindow, handleWindow };
};

export default useModalWindow;
