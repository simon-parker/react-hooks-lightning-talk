import React from 'react';
import { ComponentWithState } from "./ComponentWithState";
import { cleanup, fireEvent, render, RenderResult } from "react-testing-library";
import { ComponentWithReducer } from "./ComponentWithReducer";

describe('ComponentWithReducer', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = render(<ComponentWithReducer/>);
  });

  it('shows default state', () => {
    app.getByText('value is 0');
  });

  it('increments the value', () => {
    fireEvent.click(app.getByText('increment'));

    expect(app.getByText('value is 1')).toBeTruthy();
  });

  it('decrements the value', () => {
    fireEvent.click(app.getByText('decrement'));

    expect(app.getByText('value is -1')).toBeTruthy();
  });
});

afterEach(cleanup);
