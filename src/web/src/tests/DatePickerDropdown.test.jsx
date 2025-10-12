import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../win95-bootstrap/win95.css";

import { cleanup, render } from 'vitest-browser-react';
import DatePickerDropdown from "../DatePickerDropdown/DatePickerDropdown";
import { describe, it, expect, test, afterEach, beforeEach, afterAll } from 'vitest';

import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'
import { useState } from "react";
import { page } from "@vitest/browser/context";

// Mock the useDates hook:
const dates = [
  "1999-11-05",
  "1999-11-26",
  "1999-12-31",
  "20XX-XX-XX"
]

const restHandlers = [
  http.get(`${import.meta.env.VITE_CAPTURE_SERV_URL}/captures`, () => {
    return HttpResponse.json(dates)
  }),
]

const worker = setupWorker(...restHandlers)


// Mock what would go immediately outside the component with a simple wrapper:
const Wrapper = () => {
  const [date, setDate] = useState();
  return <DatePickerDropdown date={date} onDatePicked={(date) => setDate(date)} />
}

describe('The Date Picker', () => {
  beforeEach(async () => await worker.start())

  afterEach(() => {
    worker.resetHandlers();
    cleanup();
  })

  afterAll(() => worker.stop())

  it('should not show any dates initially', async () => {
    const screen = render(<Wrapper />);
    for (const date of dates) {
      await expect.element(screen.getByText(date)).not.toBeInTheDocument();
    }
  })

  it('should show all the dates when the button is clicked', async () => {
    const screen = render(<Wrapper />);
    const dropdown = screen.getByRole('button');
    await dropdown.click();
    for (const date of dates) {
      await expect.element(screen.getByText(date)).toBeInTheDocument();
    }
  })
});
