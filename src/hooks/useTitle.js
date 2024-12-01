import { useEffect } from "react";

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Shopping Cart - Redux`
  }, [title]);

  return null;
}
