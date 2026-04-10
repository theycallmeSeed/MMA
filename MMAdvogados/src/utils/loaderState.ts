type Listener = (state: boolean) => void;

let isLoaderVisible = false;
const listeners = new Set<Listener>();

export const loaderState = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    listener(isLoaderVisible);
    return () => listeners.delete(listener);
  },
  getSnapshot() {
    return isLoaderVisible;
  },
  show() {
    isLoaderVisible = true;
    listeners.forEach((l) => l(isLoaderVisible));
  },
  hide() {
    isLoaderVisible = false;
    listeners.forEach((l) => l(isLoaderVisible));
  },
};
