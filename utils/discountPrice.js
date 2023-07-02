
export const discountPrice = (discountPercent, current) => {
    const newPrice = (((discountPercent * current) / 100) - current).toFixed(2).replace("-", " ");
    return newPrice;
}