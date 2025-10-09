// src/data/code-snippets/checkbox.ts

// --- Installation Commands ---
export const InstallCommands = {
  dependency: '',
  ts: "npx screenui add checkbox --lang ts --path src/components",
  js: "npx screenui add checkbox --lang js --path src/components",
};

// --- TypeScript Examples ---

export const TsCode1 = `import React, { useState } from "react";
import { CheckboxWithLabel } from "@/components/Checkbox";

export default function VariantCheckboxDemo() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [filledChecked, setFilledChecked] = useState(true);
  const [outlinedChecked, setOutlinedChecked] = useState(false);
  const [softChecked, setSoftChecked] = useState(true);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <CheckboxWithLabel
          label="Default"
          variant="default"
          checked={defaultChecked}
          onChange={(c) => setDefaultChecked(c === 'indeterminate' ? true : c)}
        />
        <CheckboxWithLabel
          label="Filled"
          variant="filled"
          checked={filledChecked}
          onChange={(c) => setFilledChecked(c === 'indeterminate' ? true : c)}
        />
        <CheckboxWithLabel
          label="Outlined"
          variant="outlined"
          checked={outlinedChecked}
          onChange={(c) => setOutlinedChecked(c === 'indeterminate' ? true : c)}
        />
        <CheckboxWithLabel
          label="Soft"
          variant="soft"
          checked={softChecked}
          onChange={(c) => setSoftChecked(c === 'indeterminate' ? true : c)}
        />
      </div>
    </div>
  );
}
`;

export const TsCode2 = `import React, { useState } from "react";
import { CheckboxWithLabel } from "@/components/Checkbox";

export default function SizeCheckboxDemo() {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(true);
  const [lg, setLg] = useState(false);
  const [xl, setXl] = useState(true);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <CheckboxWithLabel label="Small" size="sm" checked={sm} onChange={(c) => setSm(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="Medium" size="md" checked={md} onChange={(c) => setMd(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="Large" size="lg" checked={lg} onChange={(c) => setLg(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="XL" size="xl" checked={xl} onChange={(c) => setXl(c === 'indeterminate' ? true : c)} />
      </div>
    </div>
  );
}
`;

export const TsCode3 = `import React, { useState } from "react";
import { CheckboxWithLabel } from "@/components/Checkbox";

export default function RoundedCheckboxDemo() {
  const [sm, setSm] = useState(true);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(true);
  const [full, setFull] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex gap-4 flex-wrap">
        <CheckboxWithLabel label="Small" rounded="sm" checked={sm} onChange={(c) => setSm(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="Medium" rounded="md" checked={md} onChange={(c) => setMd(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="Large" rounded="lg" checked={lg} onChange={(c) => setLg(c === 'indeterminate' ? true : c)} />
        <CheckboxWithLabel label="Full" rounded="full" checked={full} onChange={(c) => setFull(c === 'indeterminate' ? true : c)} />
      </div>
    </div>
  );
}
`;

export const TsCode4 = `import React, { useState } from "react";
import { CheckboxWithLabel } from "@/components/Checkbox";

export default function SpecialStateCheckboxDemo() {
  const [indeterminate, setIndeterminate] = useState<'indeterminate' | boolean>('indeterminate');

  return (
    <div className="space-y-8">
      <CheckboxWithLabel
        label="Indeterminate"
        checked={indeterminate}
        onChange={setIndeterminate}
      />
      <div className="flex gap-4 flex-wrap mt-4">
        <CheckboxWithLabel label="Disabled Checked" checked={true} disabled />
        <CheckboxWithLabel label="Disabled Unchecked" checked={false} disabled />
      </div>
    </div>
  );
}
`;

export const TsCode5 = `import React, { useState } from "react";
import { CheckboxWithLabel } from "@/components/Checkbox";

export default function SelectAllCheckboxDemo() {
  const [selectAll, setSelectAll] = useState<'indeterminate' | boolean>(false);
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);

  const handleSelectAll = (c: boolean | 'indeterminate') => {
    const value = c === 'indeterminate' ? true : c;
    setSelectAll(value);
    setItem1(value);
    setItem2(value);
    setItem3(value);
  };

  const handleItemChange = (setter: (v: boolean) => void, c: boolean | 'indeterminate') => {
    const value = c === 'indeterminate' ? true : c;
    setter(value);

    const items = [item1, item2, item3];
    const idx = setter === setItem1 ? 0 : setter === setItem2 ? 1 : 2;
    items[idx] = value;

    const count = items.filter(Boolean).length;
    if (count === 0) setSelectAll(false);
    else if (count === 3) setSelectAll(true);
    else setSelectAll('indeterminate');
  };

  return (
    <div className="space-y-4">
      <CheckboxWithLabel
        label="Select All Items example (3)"
        checked={selectAll}
        onChange={handleSelectAll}
      />
      <div className="ml-6 space-y-2 border-l-2 border-gray-200 pl-3">
        <CheckboxWithLabel label="Select Item 1" checked={item1} onChange={(c) => handleItemChange(setItem1, c)} />
        <CheckboxWithLabel label="Select Item 2" checked={item2} onChange={(c) => handleItemChange(setItem2, c)} />
        <CheckboxWithLabel label="Select Item 3" checked={item3} onChange={(c) => handleItemChange(setItem3, c)} />
      </div>
    </div>
  );
}
`;

// --- JavaScript Examples (reuse TS if identical) ---
export const JsCode1 = TsCode1;
export const JsCode2 = TsCode2;
export const JsCode3 = TsCode3;
export const JsCode4 = TsCode4;
export const JsCode5 = TsCode5;

// --- Meta Data ---
export const Component = "Checkbox";
export const Title = "Checkbox Component";
export const Description =
  "A versatile and accessible checkbox component with variants, sizes, indeterminate state, select-all pattern, and label support.";
export const LastUpdated = "2025-09-28";
export const Version = "1.0.0";
