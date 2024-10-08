export const categories = [
    { id: "000", label: "전체" },
    {
        id: "001", label: "상의", subCategories: [
            { id: "", label: "전체" },
            { id: "001", label: "반팔" },
            { id: "002", label: "긴팔" }
        ]
    },
    {
        id: "002", label: "하의", subCategories: [
            { id: "", label: "전체" },
            { id: "003", label: "청바지" },
            { id: "004", label: "반바지" },
            { id: "005", label: "면바지" },
            { id: "006", label: "나일론" }
        ]
    },
    {
        id: "003", label: "아우터", subCategories: [
            { id: "", label: "전체" },
            { id: "007", label: "후드집업" },
            { id: "008", label: "코트" },
            { id: "009", label: "바람막이" },
            { id: "010", label: "패딩" },
            { id: "011", label: "자켓" }
        ]
    },
    {
        id: "004", label: "액세서리", subCategories: [
            { id: "", label: "전체" },
            { id: "012", label: "모자" },
            { id: "013", label: "안경" },
            { id: "014", label: "가방" },
        ]
    }
];