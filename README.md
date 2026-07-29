# Belajar TypeScript Dasar

Praktek belajar TypeScript dasar dari awal.

## Daftar Materi

### 1. Tipe Data Dasar
Type annotations untuk `string`, `number`, `boolean`.
- File: `tests/tipe-data.test.ts`

### 2. Function Type
Mendeklarasikan parameter dan return type pada function.
- File: `src/say-hello.ts`, `tests/say-hello.test.ts`

### 3. Function
Return type dan `void` pada function.
- File: `tests/function.test.ts`

### 4. Function Parameter
Default parameter pada function.
- File: `tests/function-parameter.test.ts`

### 5. Rest Parameter
Rest parameter (`...values: number[]`) pada function.
- File: `tests/rest-parameter.test.ts`

### 6. Any Type
Menggunakan tipe `any` untuk mengabaikan type checking.
- File: `tests/any.test.ts`

### 7. Array
Array type (`string[]`, `number[]`) dan `readonly` array.
- File: `tests/array.test.ts`

### 8. Tuple
Tuple — array dengan panjang dan tipe tetap per index.
- File: `tests/tuple.test.ts`

### 9. Union Type
Union type (`string | number | boolean`) dan type narrowing dengan `typeof`.
- File: `tests/union.test.ts`

### 10. Optional Parameter
Optional parameter (`?`), `undefined`, dan default value.
- File: `tests/optional.test.ts`

### 11. Object Type
Inline object type annotation.
- File: `tests/object.test.ts`

### 12. Type Alias
Membuat custom type dengan `type`, union di dalam type, dan optional property.
- File: `src/type-alias.ts`, `tests/type-alias.test.ts`

### 13. Interface
Interface untuk mendefinisikan bentuk object, termasuk `readonly` dan optional property.
- File: `src/seller.ts`, `tests/seller.test.ts`

### 14. Function Interface
Interface dengan call signature untuk mendeskripsikan function type.
- File: `tests/function-interface.test.ts`

### 15. Function in Interface
Method dalam interface.
- File: `src/person.ts`, `tests/function-in-interface.test.ts`

### 16. Enum
Enum untuk kumpulan nilai konstan.
- File: `src/enum.ts`, `tests/enum.test.ts`

### 17. Extends Interface
Interface inheritance (Manager extends Employee).
- File: `src/employee.ts`, `tests/employee.test.ts`

### 18. Intersection Types
Menggabungkan tipe dengan operator `&`.
- File: `tests/intersection-types.test.ts`

### 19. Indexable Interface
Interface dengan index signature untuk array (`[index: number]`).
- File: `tests/indexable-interface.test.ts`

### 20. String Dictionary
Interface dengan index signature object (`[key: string]`).
- File: `tests/string-dictionary.test.ts`

### 21. Type Assertions
Konversi tipe dengan `as` keyword.
- File: `tests/assertions.test.ts`

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
