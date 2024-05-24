# CurrencyInput

The `CurrencyInput` component is used for monetary value input.

## Example Usage

```jsx
  const [currencyState, setCurrencyState] = React.useState("");
  <CurrencyInput
    placeholder="R$ 0,00"
    name="currencyInput"
    value={currencyState}
    onChange={(event) => setCurrencyState(event.target.value)}
  />
```