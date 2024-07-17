type Wrapper<T> = {
    records: T
}

export type Record = {
    name: kintone.fieldTypes.SingleLineText
    amount: kintone.fieldTypes.Number
    city: kintone.fieldTypes.DropDown
}

export type Records = Wrapper<Record[]>
