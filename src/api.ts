import TestUtils from "react-dom/test-utils";

export type CancelRequest = () => void
export type Callback = (data: string) => void

const noop = () => null;
let lastCallback: Callback = noop;

export const fetchDataFromApi = (id: string, callback: Callback): CancelRequest => {
  lastCallback = callback;
  return () => lastCallback = noop;
};

export const act = (TestUtils as any).act as (behavior: () => void) => void;

export const simulateResponseFromApi = (data: string) => {
  if (lastCallback) {
    act(() => {
      lastCallback(data);
    });
    lastCallback = noop;
  }
};
