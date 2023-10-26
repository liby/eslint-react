@eslint-react/jsx

# @eslint-react/jsx

## Table of contents

### Type Aliases

- [JSXValueCheckOptions](README.md#jsxvaluecheckoptions)

### Variables

- [defaultJSXValueCheckOptions](README.md#defaultjsxvaluecheckoptions)
- [hdlAnimation](README.md#hdlanimation)
- [hdlClipboard](README.md#hdlclipboard)
- [hdlComposition](README.md#hdlcomposition)
- [hdlFocus](README.md#hdlfocus)
- [hdlForm](README.md#hdlform)
- [hdlImage](README.md#hdlimage)
- [hdlKeyboard](README.md#hdlkeyboard)
- [hdlMedia](README.md#hdlmedia)
- [hdlMouse](README.md#hdlmouse)
- [hdlScroll](README.md#hdlscroll)
- [hdlSelection](README.md#hdlselection)
- [hdlTouch](README.md#hdltouch)
- [hdlTransition](README.md#hdltransition)
- [hdlWheel](README.md#hdlwheel)

### Functions

- [elementType](README.md#elementtype)
- [findPropInAttributes](README.md#findpropinattributes)
- [findPropInProperties](README.md#findpropinproperties)
- [getPropName](README.md#getpropname)
- [getPropNameWithNamespace](README.md#getpropnamewithnamespace)
- [hasAnyProp](README.md#hasanyprop)
- [hasChildren](README.md#haschildren)
- [hasEveryProp](README.md#haseveryprop)
- [hasProp](README.md#hasprop)
- [isFunctionReturningJSXValue](README.md#isfunctionreturningjsxvalue)
- [isInsidePropValue](README.md#isinsidepropvalue)
- [isJSXValue](README.md#isjsxvalue)
- [isLineBreak](README.md#islinebreak)
- [isLiteral](README.md#isliteral)
- [isWhiteSpace](README.md#iswhitespace)
- [traverseUpProp](README.md#traverseupprop)

## Type Aliases

### JSXValueCheckOptions

Ƭ **JSXValueCheckOptions**: `Object`

#### Type declaration

| Name          | Type      | Description                                                 |
| :------------ | :-------- | :---------------------------------------------------------- |
| `ignoreNull?` | `boolean` | Whether to ignore null values                               |
| `strict?`     | `boolean` | Whether to check all branches of the conditional expression |

## Variables

### defaultJSXValueCheckOptions

• `Const` **defaultJSXValueCheckOptions**: `Object`

#### Type declaration

| Name         | Type    |
| :----------- | :------ |
| `ignoreNull` | `false` |
| `strict`     | `false` |

---

### hdlAnimation

• `Const` **hdlAnimation**: readonly [`"onAnimationStart"`, `"onAnimationEnd"`, `"onAnimationIteration"`]

---

### hdlClipboard

• `Const` **hdlClipboard**: readonly [`"onCopy"`, `"onCut"`, `"onPaste"`]

---

### hdlComposition

• `Const` **hdlComposition**: readonly [`"onCompositionEnd"`, `"onCompositionStart"`, `"onCompositionUpdate"`]

---

### hdlFocus

• `Const` **hdlFocus**: readonly [`"onFocus"`, `"onBlur"`]

---

### hdlForm

• `Const` **hdlForm**: readonly [`"onChange"`, `"onInput"`, `"onSubmit"`]

---

### hdlImage

• `Const` **hdlImage**: readonly [`"onLoad"`, `"onError"`]

---

### hdlKeyboard

• `Const` **hdlKeyboard**: readonly [`"onKeyDown"`, `"onKeyPress"`, `"onKeyUp"`]

---

### hdlMedia

• `Const` **hdlMedia**: readonly [`"onAbort"`, `"onCanPlay"`, `"onCanPlayThrough"`, `"onDurationChange"`, `"onEmptied"`, `"onEncrypted"`, `"onEnded"`, `"onError"`, `"onLoadedData"`, `"onLoadedMetadata"`, `"onLoadStart"`, `"onPause"`, `"onPlay"`, `"onPlaying"`, `"onProgress"`, `"onRateChange"`, `"onSeeked"`, `"onSeeking"`, `"onStalled"`, `"onSuspend"`, `"onTimeUpdate"`, `"onVolumeChange"`, `"onWaiting"`]

---

### hdlMouse

• `Const` **hdlMouse**: readonly [`"onClick"`, `"onContextMenu"`, `"onDblClick"`, `"onDoubleClick"`, `"onDrag"`, `"onDragEnd"`, `"onDragEnter"`, `"onDragExit"`, `"onDragLeave"`, `"onDragOver"`, `"onDragStart"`, `"onDrop"`, `"onMouseDown"`, `"onMouseEnter"`, `"onMouseLeave"`, `"onMouseMove"`, `"onMouseOut"`, `"onMouseOver"`, `"onMouseUp"`]

---

### hdlScroll

• `Const` **hdlScroll**: readonly [`"onScroll"`]

---

### hdlSelection

• `Const` **hdlSelection**: readonly [`"onSelect"`]

---

### hdlTouch

• `Const` **hdlTouch**: readonly [`"onTouchCancel"`, `"onTouchEnd"`, `"onTouchMove"`, `"onTouchStart"`]

---

### hdlTransition

• `Const` **hdlTransition**: readonly [`"onTransitionEnd"`]

---

### hdlWheel

• `Const` **hdlWheel**: readonly [`"onWheel"`]

## Functions

### elementType

▸ **elementType**(`node`): `string`

Returns the tag name associated with a JSXOpeningElement.

#### Parameters

| Name   | Type                                        | Description                                |
| :----- | :------------------------------------------ | :----------------------------------------- |
| `node` | `JSXOpeningElement` \| `JSXOpeningFragment` | The visited JSXOpeningElement node object. |

#### Returns

`string`

The element's tag name.

---

### findPropInAttributes

▸ **findPropInAttributes**(`attributes`, `context`): (`propName`: `string`) => `Option`<`NonNullable`<`undefined` \| `JSXAttribute` \| `JSXSpreadAttribute`\>\>

#### Parameters

| Name         | Type                                                        | Description                 |
| :----------- | :---------------------------------------------------------- | :-------------------------- |
| `attributes` | (`JSXAttribute` \| `JSXSpreadAttribute`)[]                  | The attributes to search in |
| `context`    | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | The rule context            |

#### Returns

`fn`

A function that searches for a property in the given attributes

▸ (`propName`): `Option`<`NonNullable`<`undefined` \| `JSXAttribute` \| `JSXSpreadAttribute`\>\>

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `propName` | `string` |

##### Returns

`Option`<`NonNullable`<`undefined` \| `JSXAttribute` \| `JSXSpreadAttribute`\>\>

---

### findPropInProperties

▸ **findPropInProperties**(`properties`, `context`, `seenProps?`): (`propName`: `string`) => `Option`<`PropertyComputedName` \| `PropertyNonComputedName` \| `RestElement` \| `SpreadElement`\>

#### Parameters

| Name         | Type                                                        | Default value | Description                                |
| :----------- | :---------------------------------------------------------- | :------------ | :----------------------------------------- |
| `properties` | `ObjectLiteralElement`[] \| (`Property` \| `RestElement`)[] | `undefined`   | The properties to search in                |
| `context`    | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | `undefined`   | The rule context                           |
| `seenProps`  | `string`[]                                                  | `[]`          | The properties that have already been seen |

#### Returns

`fn`

A function that searches for a property in the given properties

▸ (`propName`): `Option`<`PropertyComputedName` \| `PropertyNonComputedName` \| `RestElement` \| `SpreadElement`\>

##### Parameters

| Name       | Type     |
| :--------- | :------- |
| `propName` | `string` |

##### Returns

`Option`<`PropertyComputedName` \| `PropertyNonComputedName` \| `RestElement` \| `SpreadElement`\>

---

### getPropName

▸ **getPropName**(`node`): `string`

Get the name of a JSX attribute

#### Parameters

| Name   | Type           | Description            |
| :----- | :------------- | :--------------------- |
| `node` | `JSXAttribute` | The JSX attribute node |

#### Returns

`string`

string

---

### getPropNameWithNamespace

▸ **getPropNameWithNamespace**(`node`): `string`

Get the name of a JSX attribute with namespace

#### Parameters

| Name   | Type           | Description            |
| :----- | :------------- | :--------------------- |
| `node` | `JSXAttribute` | The JSX attribute node |

#### Returns

`string`

string

---

### hasAnyProp

▸ **hasAnyProp**(`attributes`, `propNames`, `context`): `boolean`

Check if any of the given prop names are present in the given attributes

#### Parameters

| Name         | Type                                                        | Description                  |
| :----------- | :---------------------------------------------------------- | :--------------------------- |
| `attributes` | (`JSXAttribute` \| `JSXSpreadAttribute`)[]                  | The attributes to search in  |
| `propNames`  | `string`[]                                                  | The prop names to search for |
| `context`    | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | The rule context             |

#### Returns

`boolean`

`true` if any of the given prop names are present in the given attributes

---

### hasChildren

▸ **hasChildren**(`node`): `boolean`

Check if a JSXElement or JSXFragment has children

#### Parameters

| Name   | Type                          | Description           |
| :----- | :---------------------------- | :-------------------- |
| `node` | `JSXElement` \| `JSXFragment` | The AST node to check |

#### Returns

`boolean`

`true` if the node has children

---

### hasEveryProp

▸ **hasEveryProp**(`attributes`, `propNames`, `context`): `boolean`

Check if all of the given prop names are present in the given attributes

#### Parameters

| Name         | Type                                                        | Description                  |
| :----------- | :---------------------------------------------------------- | :--------------------------- |
| `attributes` | (`JSXAttribute` \| `JSXSpreadAttribute`)[]                  | The attributes to search in  |
| `propNames`  | `string`[]                                                  | The prop names to search for |
| `context`    | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | The rule context             |

#### Returns

`boolean`

`true` if all of the given prop names are present in the given attributes

---

### hasProp

▸ **hasProp**(`attributes`, `propName`, `context`): `boolean`

Check if the given prop name is present in the given attributes

#### Parameters

| Name         | Type                                                        | Description                 |
| :----------- | :---------------------------------------------------------- | :-------------------------- |
| `attributes` | (`JSXAttribute` \| `JSXSpreadAttribute`)[]                  | The attributes to search in |
| `propName`   | `string`                                                    | The prop name to search for |
| `context`    | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | The rule context            |

#### Returns

`boolean`

`true` if the given prop name is present in the given properties

---

### isFunctionReturningJSXValue

▸ **isFunctionReturningJSXValue**(`node`, `context`, `options?`): `boolean`

Check if function is returning JSX

#### Parameters

| Name       | Type                                                        | Description                        |
| :--------- | :---------------------------------------------------------- | :--------------------------------- |
| `node`     | `TSESTreeFunction`                                          | The return statement node to check |
| `context`  | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | The rule context                   |
| `options?` | [`JSXValueCheckOptions`](README.md#jsxvaluecheckoptions)    | The JSX value check options        |

#### Returns

`boolean`

boolean

---

### isInsidePropValue

▸ **isInsidePropValue**(`node`): `boolean`

Checks if the node is inside a prop's value

#### Parameters

| Name   | Type   | Description           |
| :----- | :----- | :-------------------- |
| `node` | `Node` | The AST node to check |

#### Returns

`boolean`

`true` if the node is inside a prop's value

---

### isJSXValue

▸ **isJSXValue**(`node`, `context`, `options?`): `boolean`

Check if a node is a JSX value

#### Parameters

| Name      | Type                                                        | Default value                 | Description                       |
| :-------- | :---------------------------------------------------------- | :---------------------------- | :-------------------------------- |
| `node`    | `undefined` \| `null` \| `Node`                             | `undefined`                   | The AST node to check             |
| `context` | `Readonly`<`RuleContext`<`string`, readonly `unknown`[]\>\> | `undefined`                   | The rule context                  |
| `options` | [`JSXValueCheckOptions`](README.md#jsxvaluecheckoptions)    | `defaultJSXValueCheckOptions` | The `JSXValueCheckOptions` to use |

#### Returns

`boolean`

boolean

---

### isLineBreak

▸ **isLineBreak**(`node`): `boolean`

Check if a Literal or JSXText node is a line break

#### Parameters

| Name   | Type   | Description           |
| :----- | :----- | :-------------------- |
| `node` | `Node` | The AST node to check |

#### Returns

`boolean`

boolean

---

### isLiteral

▸ **isLiteral**(`node`): node is JSXText \| BigIntLiteral \| BooleanLiteral \| NullLiteral \| NumberLiteral \| RegExpLiteral \| StringLiteral

Check if a node is a Literal or JSXText

#### Parameters

| Name   | Type                            | Description           |
| :----- | :------------------------------ | :-------------------- |
| `node` | `undefined` \| `null` \| `Node` | The AST node to check |

#### Returns

node is JSXText \| BigIntLiteral \| BooleanLiteral \| NullLiteral \| NumberLiteral \| RegExpLiteral \| StringLiteral

boolean `true` if the node is a Literal or JSXText

---

### isWhiteSpace

▸ **isWhiteSpace**(`node`): `boolean`

Check if a Literal or JSXText node is whitespace

#### Parameters

| Name   | Type                   | Description           |
| :----- | :--------------------- | :-------------------- |
| `node` | `JSXText` \| `Literal` | The AST node to check |

#### Returns

`boolean`

boolean `true` if the node is whitespace

---

### traverseUpProp

▸ **traverseUpProp**(`node`, `predicate?`): `O.Option`<`TSESTree.JSXAttribute`\>

Traverses up prop node

#### Parameters

| Name        | Type                                  | Default value | Description                           |
| :---------- | :------------------------------------ | :------------ | :------------------------------------ |
| `node`      | `Node`                                | `undefined`   | The AST node to start traversing from |
| `predicate` | (`node`: `JSXAttribute`) => `boolean` | `F.constTrue` | The predicate to check each node      |

#### Returns

`O.Option`<`TSESTree.JSXAttribute`\>

prop node if found