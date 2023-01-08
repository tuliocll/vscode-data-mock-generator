# Vscode Mock Data Generator

Generate mocks from your data structure in JSON format to speed up your tests and development!
![](preview.gif)

## How to use

You can choose two ways to mock generation:

### 🖱️ Creating a object schema (js like)

Create a object with your keys and types directly in your editor:

```javascript
{
    id: number,
    name: name,
    description: string
}
```

Then select the object, open the command palette and type: `Generate Mock Data` and hit enter, type the size and the magic is done 🪄.

### ⌨️ Typing schema on command pallete:

Open the command palette and type: `Generate Mock Data`.

> EG: `id:number,name:name,avatar:image,city

On the input and put the keys of the object that you want:

> You can type the keys using colon character .

### Types

| Type   | Description                        |
| ------ | ---------------------------------- |
| image  | Return a string with an image URL  |
| string | Return a paragraph                 |
| number | Return a random int                |
| name   | Return a string with a random name |

### TODO

- ✅ ~~Improve validators~~
- Create new types
- Add more mocks
- Improve "type system" to make easy for add new types
- Put mocked data on json files

**Enjoy!**
