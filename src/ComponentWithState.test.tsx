import React from 'react';
import { ComponentWithState } from "./ComponentWithState";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";

describe('ComponentWithState', () => {
  let app: RenderResult;

  beforeEach(() => {
    app = render(<ComponentWithState/>);
  });

  it('shows default state', () => {
    app.getByText('value is 0');
  });

  it('allows us to update state', () => {
    fireEvent.click(app.getByText('increment'));

    expect(app.getByText('value is 1')).toBeTruthy();
  });
});

afterEach(cleanup);
