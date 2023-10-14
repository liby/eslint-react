[@eslint-react/tools](../README.md) / [O](../modules/O.md) / None

# Interface: None<A\>

[O](../modules/O.md).None

**`Since`**

2.0.0

## Type parameters

| Name |
| :--- |
| `A`  |

## Hierarchy

- [`Case`](Data.Case-1.md)

- `Pipeable`

- `Inspectable`

- `Effect`<`never`, `Cause.NoSuchElementException`, `A`\>

  ↳ **`None`**

## Table of contents

### Properties

- [[ChannelTypeId]](O.None.md#[channeltypeid])
- [[EffectTypeId]](O.None.md#[effecttypeid])
- [[NodeInspectSymbol]](O.None.md#[nodeinspectsymbol])
- [[SinkTypeId]](O.None.md#[sinktypeid])
- [[StreamTypeId]](O.None.md#[streamtypeid])
- [[TypeId]](O.None.md#[typeid])
- [[blacklistSymbol]](O.None.md#[blacklistsymbol])
- [[typeSymbol]](O.None.md#[typesymbol])
- [[unifySymbol]](O.None.md#[unifysymbol])
- [\_op](O.None.md#_op)
- [\_tag](O.None.md#_tag)
- [toJSON](O.None.md#tojson)
- [toString](O.None.md#tostring)

### Methods

- [[symbol]](O.None.md#[symbol])
- [[symbol]](O.None.md#[symbol]-1)
- [pipe](O.None.md#pipe)

## Properties

### [ChannelTypeId]

• `Readonly` **[ChannelTypeId]**: `VarianceStruct`<`never`, `unknown`, `unknown`, `unknown`, `NoSuchElementException`, `never`, `A`\>

---

### [EffectTypeId]

• `Readonly` **[EffectTypeId]**: `VarianceStruct`<`never`, `NoSuchElementException`, `A`\>

---

### [NodeInspectSymbol]

• `Readonly` **[NodeInspectSymbol]**: () => `unknown`

#### Type declaration

▸ (): `unknown`

##### Returns

`unknown`

#### Inherited from

Inspectable.[NodeInspectSymbol]

---

### [SinkTypeId]

• `Readonly` **[SinkTypeId]**: `VarianceStruct`<`never`, `NoSuchElementException`, `unknown`, `never`, `A`\>

---

### [StreamTypeId]

• `Readonly` **[StreamTypeId]**: `Object`

#### Type declaration

| Name | Type                                       |
| :--- | :----------------------------------------- |
| `_A` | (`_`: `never`) => `A`                      |
| `_E` | (`_`: `never`) => `NoSuchElementException` |
| `_R` | (`_`: `never`) => `never`                  |

---

### [TypeId]

• `Readonly` **[TypeId]**: `Object`

#### Type declaration

| Name | Type                  |
| :--- | :-------------------- |
| `_A` | (`_`: `never`) => `A` |

---

### [blacklistSymbol]

• `Optional` **[blacklistSymbol]**: [`OptionUnifyBlacklist`](O.OptionUnifyBlacklist.md)

---

### [typeSymbol]

• `Optional` **[typeSymbol]**: `unknown`

---

### [unifySymbol]

• `Optional` **[unifySymbol]**: [`OptionUnify`](O.OptionUnify.md)<[`None`](O.None.md)<`A`\>\>

---

### \_op

• `Readonly` **\_op**: `"None"`

---

### \_tag

• `Readonly` **\_tag**: `"None"`

---

### toJSON

• `Readonly` **toJSON**: () => `unknown`

#### Type declaration

▸ (): `unknown`

##### Returns

`unknown`

#### Inherited from

Inspectable.toJSON

---

### toString

• `Readonly` **toString**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Inherited from

Inspectable.toString

## Methods

### [symbol]

▸ **[symbol]**(`that`): `boolean`

#### Parameters

| Name   | Type                      |
| :----- | :------------------------ |
| `that` | [`Equal`](Equal.Equal.md) |

#### Returns

`boolean`

#### Inherited from

[Case](Data.Case-1.md).[[symbol]](Data.Case-1.md#[symbol]-1)

---

### [symbol]

▸ **[symbol]**(): `number`

#### Returns

`number`

#### Inherited from

Data.Case.[symbol]

---

### pipe

▸ **pipe**<`A`, `B`\>(`this`, `ab`): `B`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |

#### Returns

`B`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`\>(`this`, `ab`, `bc`): `C`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |

#### Returns

`C`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`\>(`this`, `ab`, `bc`, `cd`): `D`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |

#### Returns

`D`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`\>(`this`, `ab`, `bc`, `cd`, `de`): `E`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |

#### Returns

`E`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`): `F`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |

#### Returns

`F`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`): `G`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |

#### Returns

`G`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`): `H`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |

#### Returns

`H`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`): `I`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |

#### Returns

`I`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`): `J`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |

#### Returns

`J`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`): `K`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |

#### Returns

`K`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`): `L`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |

#### Returns

`L`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`): `M`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |

#### Returns

`M`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`): `N`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |

#### Returns

`N`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`): `O`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |

#### Returns

`O`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`): `P`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |

#### Returns

`P`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`): `Q`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |

#### Returns

`Q`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`): `R`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |
| `R`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |
| `qr`   | (`_`: `Q`) => `R` |

#### Returns

`R`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`): `S`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |
| `R`  |
| `S`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |
| `qr`   | (`_`: `Q`) => `R` |
| `rs`   | (`_`: `R`) => `S` |

#### Returns

`S`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`): `T`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |
| `R`  |
| `S`  |
| `T`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |
| `qr`   | (`_`: `Q`) => `R` |
| `rs`   | (`_`: `R`) => `S` |
| `st`   | (`_`: `S`) => `T` |

#### Returns

`T`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`): `U`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |
| `R`  |
| `S`  |
| `T`  |
| `U`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |
| `qr`   | (`_`: `Q`) => `R` |
| `rs`   | (`_`: `R`) => `S` |
| `st`   | (`_`: `S`) => `T` |
| `tu`   | (`_`: `T`) => `U` |

#### Returns

`U`

#### Inherited from

Pipeable.pipe

▸ **pipe**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`\>(`this`, `ab`, `bc`, `cd`, `de`, `ef`, `fg`, `gh`, `hi`, `ij`, `jk`, `kl`, `lm`, `mn`, `no`, `op`, `pq`, `qr`, `rs`, `st`, `tu`): `U`

#### Type parameters

| Name |
| :--- |
| `A`  |
| `B`  |
| `C`  |
| `D`  |
| `E`  |
| `F`  |
| `G`  |
| `H`  |
| `I`  |
| `J`  |
| `K`  |
| `L`  |
| `M`  |
| `N`  |
| `O`  |
| `P`  |
| `Q`  |
| `R`  |
| `S`  |
| `T`  |
| `U`  |

#### Parameters

| Name   | Type              |
| :----- | :---------------- |
| `this` | `A`               |
| `ab`   | (`_`: `A`) => `B` |
| `bc`   | (`_`: `B`) => `C` |
| `cd`   | (`_`: `C`) => `D` |
| `de`   | (`_`: `D`) => `E` |
| `ef`   | (`_`: `E`) => `F` |
| `fg`   | (`_`: `F`) => `G` |
| `gh`   | (`_`: `G`) => `H` |
| `hi`   | (`_`: `H`) => `I` |
| `ij`   | (`_`: `I`) => `J` |
| `jk`   | (`_`: `J`) => `K` |
| `kl`   | (`_`: `K`) => `L` |
| `lm`   | (`_`: `L`) => `M` |
| `mn`   | (`_`: `M`) => `N` |
| `no`   | (`_`: `N`) => `O` |
| `op`   | (`_`: `O`) => `P` |
| `pq`   | (`_`: `P`) => `Q` |
| `qr`   | (`_`: `Q`) => `R` |
| `rs`   | (`_`: `R`) => `S` |
| `st`   | (`_`: `S`) => `T` |
| `tu`   | (`_`: `T`) => `U` |

#### Returns

`U`

#### Inherited from

Pipeable.pipe