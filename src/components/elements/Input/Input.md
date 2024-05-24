# Input

The `Input` component is used for monetary value input.

## Example Usage

```jsx
  const [inputState, setCurrencyState] = React.useState("");
  <div>
    <Input
      placeholder="Fullname"
      name="fullname"
      value={inputState}
      onChange={(event) => setCurrencyState(event.target.value)}
    />
  </div>
```