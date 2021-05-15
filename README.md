# Test-Data-Extractor

### Installation

``npm install test-data-extractor --save-dev``

### Usage

This library provides you to extract data from excel or csv files according to your need

##### Read Excel and CSV files
```aidl
import { readSpreadSheet } from 'test-data-extractor';

readSpreadSheet("path_to_excel", "excel_sheet_name");
readSpreadSheet("path_to_csv");
```

##### Read given columns in an Excel or a CSV files
```aidl
import { readColumns } from 'test-data-extractor';

readColumns("path_to_excel", ["required", "column", "names"], "excel_sheet_name");
readColumns("path_to_csv", ["required", "column", "names"]);
```

##### Read given cell reference in an Excel or a CSV files
```aidl
import { readColumns } from 'test-data-extractor';

readColumns("path_to_excel", "cell_reference", "excel_sheet_name");
readColumns("path_to_csv", "cell_reference");
```