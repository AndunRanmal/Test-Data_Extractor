import { readFile, utils } from "xlsx";

// Read all data in excel file or csv file
export const readExcel = (fileName: string, sheetName?: string) => {
  const workbook = readFile(fileName, {
    type: "binary",
  });
  let xlRowObject: any[];
  if (sheetName === undefined) {
    const firstSheet = workbook.SheetNames[0];
    xlRowObject = utils.sheet_to_json(workbook.Sheets[firstSheet], {
      raw: true,
    });
  } else {
    xlRowObject = utils.sheet_to_json(workbook.Sheets[sheetName], {
      raw: true,
    });
  }
  return xlRowObject;
};

// Read only given columns data in excel or csv file
export const readColumns = (
  fileName: string,
  columnList: string[],
  sheetName?: string
) => {
  const workbook = readFile(fileName, {
    type: "binary",
  });
  let xlRowObject: any[];
  if (sheetName === undefined) {
    const firstSheet = workbook.SheetNames[0];
    xlRowObject = utils.sheet_to_json(workbook.Sheets[firstSheet], {
      raw: true,
    });
  } else {
    xlRowObject = utils.sheet_to_json(workbook.Sheets[sheetName], {
      raw: true,
    });
  }
  const filterEdObject: any[] = [];
  for (const row of xlRowObject) {
    const filtered = Object.keys(row)
      .filter((key) => columnList.includes(key))
      .reduce((obj: any, key) => {
        obj[key] = row[key];
        return obj;
      }, {});
    filterEdObject.push(filtered);
  }
  return filterEdObject;
};

// Read only value of a given cell reference in excel or csv file
export const readCellValue = (
  fileName: string,
  cellReference: string,
  sheetName?: string
) => {
  const workbook = readFile(fileName, {
    type: "binary",
  });
  let sheet: any;
  if (sheetName === undefined) {
    const firstSheetName = workbook.SheetNames[0];
    sheet = workbook.Sheets[firstSheetName];
  } else {
    sheet = workbook.Sheets[sheetName];
  }
  const cellValue = sheet[cellReference];
  return cellValue.w;
};
