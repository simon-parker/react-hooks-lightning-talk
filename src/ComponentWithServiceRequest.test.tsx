import React from 'react';
import { cleanup, render, RenderResult } from "@testing-library/react";
import { ComponentWithServiceRequest } from "./ComponentWithServiceRequest";
import { simulateResponseFromApi } from "./api";


describe('ComponentWithServiceRequest', () => {
  it('shows default state', () => {
    expect(subject.getByText('value is default')).toBeTruthy();
  });

  it('updates the state after completing the request', () => {
    simulateResponseFromApi('response');

    expect(subject.getByText('value is response')).toBeTruthy();
  });

  it('does not show warnings after unmount', () => {
    subject.unmount();

    simulateResponseFromApi('response');
  });

  it('makes request given a new parameter', () => {
    simulateResponseFromApi('response');

    subject.rerender(<ComponentWithServiceRequest id="2"/>);

    simulateResponseFromApi('another response');

    expect(subject.getByText('value is another response')).toBeTruthy();
  });

  let subject: RenderResult;

  beforeEach(() => {
    subject = render(<ComponentWithServiceRequest id={"1"}/>)
  });
});

afterEach(cleanup);

beforeEach(() => {
  jest.spyOn(console, 'log');
  jest.spyOn(console, 'error');
  jest.spyOn(console, 'warn');
});

afterEach(() => {
  expect(console.log).not.toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();
  expect(console.warn).not.toHaveBeenCalled();
});
