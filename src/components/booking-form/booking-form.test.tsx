import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from '.';
import { describe } from 'vitest';

describe('BookingForm', () => {
  const availableTimes = ['10:00', '11:00', '12:00'];
  const onChangeDate = vi.fn();
  const onSubmit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the booking form', () => {
    render(<BookingForm availableTimes={availableTimes} onDateChange={onChangeDate} onSubmit={onSubmit} />);

    const dateInput = screen.getByLabelText('Choose date:');
    const timeSelect = screen.getByLabelText('Choose time:');
    const guestsInput = screen.getByLabelText('Number of guests:');
    const occasionSelect = screen.getByLabelText('Occasion:');
    const submitButton = screen.getByText('Make your reservation');

    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument(); 
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should call onDateChange when date is changed', () => {
    render(<BookingForm availableTimes={availableTimes} onDateChange={onChangeDate} onSubmit={onSubmit} />);

    const dateInput = screen.getByLabelText('Choose date:');
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    expect(onChangeDate).toHaveBeenCalledWith('2023-01-01');
  });

  it('should display all the available times from choose time select when the field is opened', () => {
    render(<BookingForm availableTimes={availableTimes} onDateChange={onChangeDate} onSubmit={onSubmit} />);

    const timeSelect = screen.getByLabelText('Choose time:');
    fireEvent.click(timeSelect);

    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
  });

  it('should call onSubmit when the form is submitted', () => {
    render(<BookingForm availableTimes={availableTimes} onDateChange={onChangeDate} onSubmit={onSubmit} />);

    const dateInput = screen.getByLabelText('Choose date:');
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });

    const timeSelect = screen.getByLabelText('Choose time:');
    fireEvent.change(timeSelect, { target: { value: '10:00' } });

    const guestsInput = screen.getByLabelText('Number of guests:');
    fireEvent.change(guestsInput, { target: { value: '2' } });

    const occasionSelect = screen.getByLabelText('Occasion:');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByText('Make your reservation');
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({ date: '2023-01-01', time: '10:00', guests: '2', occasion: 'Birthday' });
  });
});