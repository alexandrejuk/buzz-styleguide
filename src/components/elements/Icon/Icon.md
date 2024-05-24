# Icon

The `Icon` component.

## Example Usage

Default Icons
```jsx
  const items = [
    'add', 'arrowGlyphDown', 'arrowOutlineLeft', 'arrowOutlineRight', 'award',
    'bridge', 'bulb', 'call', 'check', 'CirclePlus', 'club', 'coffee', 'contacts',
    'direction', 'distance', 'exchange', 'filter', 'hotel', 'loading', 'location',
    'message', 'moisture', 'money', 'moneyOff', 'more', 'museum', 'next', 'park',
    'photo', 'rainy', 'remove', 'reservation', 'restaurant', 'search', 'send',
    'stadium', 'subtract', 'time', 'trash', 'trending', 'upload', 'windy'
  ];

  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {items.map(item => (
      <div key={item} style={{ margin: '16px', textAlign: 'center' }}>
        <Icon name={item} heigth={32} width={32} color="#1A051D"/>
        <div style={{ fontFamily: "arial" }}>{item}</div>
      </div>
    ))}
  </div>
```