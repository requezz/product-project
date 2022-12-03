var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
var people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];
function MyListbox() {
    var _a = useState(people[0]), selectedPerson = _a[0], setSelectedPerson = _a[1];
    return (_jsxs(HListBox, __assign({ value: selectedPerson, onChange: setSelectedPerson }, { children: [_jsx(HListBox.Button, { children: selectedPerson.name }), _jsx(HListBox.Options, { children: people.map(function (person) { return (_jsx(HListBox.Option, __assign({ value: person, disabled: person.unavailable }, { children: person.name }), person.id)); }) })] })));
}
