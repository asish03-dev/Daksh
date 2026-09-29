import zipfile
import xml.etree.ElementTree as ET
import os

xlsx_path = r"c:\Users\hp\OneDrive\Desktop\Dev\SIH 2\Daksh\abc.xlsx"

if not os.path.exists(xlsx_path):
    print("File not found:", xlsx_path)
    exit(1)

with zipfile.ZipFile(xlsx_path) as z:
    shared_strings = []
    if "xl/sharedStrings.xml" in z.namelist():
        tree = ET.fromstring(z.read("xl/sharedStrings.xml"))
        for elem in tree.iter():
            if elem.tag.split('}')[-1] == 't':
                shared_strings.append(elem.text or '')

    wb = ET.fromstring(z.read("xl/workbook.xml"))
    sheets = [s.attrib['name'] for s in wb.iter() if s.tag.split('}')[-1] == 'sheet']
    print("Total Sheets:", len(sheets), sheets)

    for i, name in enumerate(sheets, 1):
        print(f"\n==========================================")
        print(f" SHEET {i}: {name}")
        print(f"==========================================")
        sheet_file = f"xl/worksheets/sheet{i}.xml"
        if sheet_file in z.namelist():
            stree = ET.fromstring(z.read(sheet_file))
            for row in stree.iter():
                if row.tag.split('}')[-1] == 'row':
                    row_vals = []
                    for c in row.iter():
                        if c.tag.split('}')[-1] == 'c':
                            t = c.attrib.get('t')
                            v = ""
                            for val_elem in c.iter():
                                if val_elem.tag.split('}')[-1] == 'v':
                                    val_idx = val_elem.text
                                    if t == 's' and val_idx and val_idx.isdigit():
                                        v = shared_strings[int(val_idx)]
                                    else:
                                        v = val_idx or ""
                            row_vals.append(v.strip())
                    if any(row_vals):
                        print(" | ".join(str(x) for x in row_vals))
