# Документация на функцию cn()

### Функция аналог - classNames / clsx

...

#### example of usage:

```js
@params:
  className: required,
  {mods}: optional,
  [addditionalClasses]: optional
```

```js
<h1
  className={cn(
    s.title, // "title", - if not use css modules
    {
      red: isRed, //caondition from props isRed
      classByCondition: 5 > 4,
      alwaysAdd: true,
      alwaysDoesentAdd: false,
    },
    ['AdditionalClassName', 'someAdditionalClass'],
  )}
>

=> <h1 class='title red classByCondition alwaysAdd AdditionalClassName someAdditionalClass'>
```
