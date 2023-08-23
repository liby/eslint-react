# jsx-handler-names

💼 This rule is enabled in the following [configs](/configs/): 🌐 `all`, ✅ `recommended`, `recommended-type-checked`.

<!-- end auto-generated rule header -->

Enforce event handler naming conventions in JSX.

## Rule Details

Examples of **incorrect** code for this rule:

```tsx
<ExampleComponent handleChange={this.handleChange} />
```

```tsx
<ExampleComponent onChange={this.componentChanged} />
```

Examples of **correct** code for this rule:

```tsx
<ExampleComponent onChange={this.handleChange} />
```

```tsx
<ExampleComponent onChange={this.props.onFoo} />
```

## Rule Options

```ts
type Options = {
    eventHandlerPrefix?: string | false;
    eventHandlerPropPrefix?: string | false;
    checkLocalVariables?: boolean;
    checkInlineFunction?: boolean;
  },

```

### Default option

```ts
"react/jsx-handler-names": ["error", {
  "eventHandlerPrefix": "handle",
  "eventHandlerPropPrefix": "on",
  "checkLocalVariables": false,
  "checkInlineFunction": false
}]
```

- `eventHandlerPrefix`: Prefix for component methods used as event handlers. Defaults to `handle`
- `eventHandlerPropPrefix`: Prefix for props that are used as event handlers. Defaults to `on`
- `checkLocalVariables`: Determines whether event handlers stored as local variables are checked. Defaults to `false`
- `checkInlineFunction`: Determines whether event handlers set as inline functions are checked. Defaults to `false`

## When Not To Use It

If you are not using JSX, or if you don't want to enforce specific naming conventions for event handlers.