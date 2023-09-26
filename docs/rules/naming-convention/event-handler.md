# react-ts/naming-convention/event-handler

Enforce consistent event handler naming conventions in JSX.

## Rule Details

Examples of **incorrect** code for this rule:

```tsx
<Component handleChange={handleChange} />;
```

```tsx
<Component onChange={componentChanged} />;
```

Examples of **correct** code for this rule:

```tsx
<Component onChange={handleChange} />;
```

```tsx
<Component onChange={props.onFoo} />;
```

## Rule Options

- `eventHandlerPrefix`: Prefix for component methods used as event handlers. Defaults to `handle`
- `eventHandlerPropPrefix`: Prefix for props that are used as event handlers. Defaults to `on`
- `checkLocalVariables`: Determines whether event handlers stored as local variables are checked. Defaults to `false`
- `checkInlineFunction`: Determines whether event handlers set as inline functions are checked. Defaults to `false`

### Default Option

```json
"react-ts/naming-convention/event-handler": ["error", {
  "eventHandlerPrefix": "handle",
  "eventHandlerPropPrefix": "on",
  "checkLocalVariables": false,
  "checkInlineFunction": false
}]
```