import { useEffect } from "react";

type ExcludeRef = React.RefObject<HTMLElement | null>;

export const useClickOutside = (
  isActive: boolean,
  onClose: () => void,
  excludeRef: ExcludeRef | ExcludeRef[]
) => {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      const refs = Array.isArray(excludeRef) ? excludeRef : [excludeRef];
      
      const isOutside = refs.every(
        (ref) => !ref?.current || !ref.current.contains(event.target as Node)
      );

      if (isOutside) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, onClose, excludeRef]);
};