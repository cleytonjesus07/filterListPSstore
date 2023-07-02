
export const discountPrice = (discountPercent, current) => {
    const newPrice = (((discountPercent * current) / 100) - current).toFixed(2).replace("-", " ");
    console.log({ newPrice, discountPercent, current })
    return newPrice;
}