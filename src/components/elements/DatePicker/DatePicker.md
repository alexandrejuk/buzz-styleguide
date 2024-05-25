# DatePicker

The `DatePicker` component is used for monetary value input.

## Example Usage

```jsx
  const [datePickerState, setDatePickerState] = React.useState("");
  <DatePicker
    name="datePickerState"
    value={datePickerState}
    onChange={(event) => setDatePickerState(event.target.value)}
    placeholder="00/00/0000"
  />
```