# Belajar TypeScript Dasar

Praktek belajar TypeScript dasar dari awal.

## Daftar Materi

### 1. Tipe Data Dasar
Type annotations untuk `string`, `number`, `boolean`.
- File: `tests/tipe-data.test.ts`

### 2. Function Type
Mendeklarasikan parameter dan return type pada function.
- File: `src/say-hello.ts`, `tests/say-hello.test.ts`

### 3. Any Type
Menggunakan tipe `any` untuk mengabaikan type checking.
- File: `tests/any.test.ts`

### 4. Array
Array type (`string[]`, `number[]`) dan `readonly` array.
- File: `tests/array.test.ts`

### 5. Tuple
Tuple — array dengan panjang dan tipe tetap per index.
- File: `tests/tuple.test.ts`

### 6. Union Type
Union type (`string | number | boolean`) dan type narrowing dengan `typeof`.
- File: `tests/union.test.ts`

### 7. Optional Parameter
Optional parameter (`?`), `undefined`, dan default value.
- File: `tests/optional.test.ts`

### 8. Object Type
Inline object type annotation.
- File: `tests/object.test.ts`

### 9. Type Alias
Membuat custom type dengan `type`, union di dalam type, dan optional property.
- File: `src/type-alias.ts`, `tests/type-alias.test.ts`

### 10. Interface
Interface untuk mendefinisikan bentuk object, termasuk `readonly` dan optional property.
- File: `src/seller.ts`, `tests/seller.test.ts`

### 11. Enum
Enum untuk kumpulan nilai konstan.
- File: `src/enum.ts`, `tests/enum.test.ts`

### 12. Function Interface
Interface dengan call signature untuk mendeskripsikan function type.
- File: `tests/function-interface.test.ts`

### 13. Indexable Interface
Interface dengan index signature untuk array (`[index: number]`).
- File: `tests/indexable-interface.test.ts`

### 14. String Dictionary
Interface dengan index signature object (`[key: string]`).
- File: `tests/string-dictionary.test.ts`

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test
npm test union

# Type checking
npx tsc --noEmit

# Compile to JavaScript
npm run build
```

## Konfigurasi

| Tools | File |
|-------|------|
| TypeScript | `tsconfig.json` |
| Babel | `babel.config.json` |
| Jest | `package.json` (jest config) |
| ESLint | `package.json` |
