import { readCellValue, readColumns, readSpreadSheet } from '../index';

test('read excel file', () => {
    const rows = readSpreadSheet("src/__tests__/resources/Book1.xlsx", "Sheet1");
    expect(rows.length).toBe(2);
})

test('read csv file', () => {
    const rows = readSpreadSheet("src/__tests__/resources/Book1.csv");
    expect(rows.length).toBe(2);
})

test('read given columns in excel file', () => {
    const coulmnData = readColumns("src/__tests__/resources/Book1.xlsx", ["Key", "Value"], "Sheet1");
    coulmnData.forEach(row => {
        expect(Object.keys(row).length).toBe(2)
        expect(Object.keys(row)).toEqual(["Key", "Value"])
    })
})

test('read given columns in csv file', () => {
    const coulmnData = readColumns("src/__tests__/resources/Book1.xlsx", ["Key", "Value"]);
    coulmnData.forEach(row => {
        expect(Object.keys(row).length).toBe(2)
        expect(Object.keys(row)).toEqual(["Key", "Value"])
    })
})

test('read cell reference value in excel file', () => {
    const cellValue = readCellValue("src/__tests__/resources/Book1.xlsx", "B2", "Sheet1");
    expect(cellValue).toEqual("JS Community")
})

test('read cell reference value in csv file', () => {
    const cellValue = readCellValue("src/__tests__/resources/Book1.xlsx", "B2");
    expect(cellValue).toEqual("JS Community")
})